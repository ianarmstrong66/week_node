let HTTP=require('http');
let URL=require('url');
let fs=require('fs');
let querystring=require("querystring");
let showRec=require("./reports.js");
let showEngRec=require("./reportEng.js");
let showHRRec=require("./reportHR.js");
let showPeople=require("./showPeople.js");
let showDept=require("./deptTable.js");
let showPerson=require("./person.js");
let insertRec=require("./insertEmp.js");
let updatePerson=require("./updatePerson.js");
let MYSQL=require("./dbConnection");
let con=MYSQL();

function indexRequest(req,res){
	let lookingFor=URL.parse(req.url).pathname;
	console.log(lookingFor);
	if (lookingFor=="/"){
		console.log("You reached the home page");
		fs.readFile('./index.html',function(error,data){
			if (error){
				res.writeHead(404);
				res.write('file not found');
			} else{
				console.log("Should be displaying index html");
				res.write(data)
				showDept(req,res);
			}
		});
	} else if(lookingFor=="/showAll"){
		console.log("About to go into show all");
		showRec(req,res);
	} else if(lookingFor=="/entryform"){
		// fs.readFile('./entry.html');
		let readable=fs.createReadStream('./entry.html');
		readable.on('open', function(){
			readable.pipe(res);
		});
		readable.on("end", function(){
		console.log("Data reading from the file is done");
		});
	} else if (lookingFor=="/showEng"){
		showRec(req,res,5);
		// showEngRec(req,res);
	} else if (lookingFor=="/showHR"){
		// showHRRec(req,res);
		showRec(req,res,1);

	} else if (lookingFor=="/showByDept"){
		let data=URL.parse(req.url,true);
		let deptNo=parseInt(data.query.id);
		console.log("About to process show by dept" + deptNo);
		showPeople(req,res,deptNo);
	} else if (lookingFor=="/insertEmp"){
		let data="";
		let record="";
		req.on("data",function(chunk){
			data+=chunk;
		});
		req.on("end", function(){
			record=querystring.parse(data);
			let sql=`insert into personal values(${record.empNo},'${record.name}','${record.email}',${record.telephone},${record.deptID})`;
			con.query(sql,function(err,result){
				if (err){
					console.log("Error: "+err);
				} else{
					console.log(result);
				}
			})
		})
	}else if (lookingFor=="/deletePerson"){
		let data=URL.parse(req.url,true);
		let empNo=parseInt(data.query.id);
		let depNo=parseInt(data.query.deptID);
		let record="";
		let sql="delete from personal where empNo = " +empNo;
		con.query(sql,function(err,result){
			if (err){
				console.log("Error: "+err);
			} else{
				console.log("Record " + empNo + " of department "+ depNo +" deleted. ");
				res.writeHead(302,{'Location':'/showByDept?id='+depNo});
				res.end();
			}
	});

	}else if (lookingFor=="/updatePerson"){		
		let data=URL.parse(req.url,true);
		let empNo=parseInt(data.query.id);
		let deptNo=parseInt(data.query.deptID);
		console.log("About to process show by dept " + deptNo);
		updatePerson(req,res,empNo,deptNo);
	}	else if (lookingFor=="/updateEmp"){
		let data="";
		let record="";
		req.on("data",function(chunk){
			data+=chunk;
		});
		req.on("end", function(){
			record=querystring.parse(data);
			let sql=`update personal  set name = '${record.name}', email='${record.email}',telephone=${record.telephone},deptID =${record.deptID} where empNo =${record.empNo}`;
			con.query(sql,function(err,result){
				if (err){
					console.log("Error: "+err);
				} else{
					console.log(result);
				}
			})
		})
	}
	else if (lookingFor=="/showPerson"){
		let data=URL.parse(req.url,true);
		let empNo=parseInt(data.query.id);
		let depNo=parseInt(data.query.deptID);
		showPerson(req,res,empNo,depNo);
	} else {console.log("The page reference "+lookingFor+ " is not being handled." );}
}
let server=HTTP.createServer(indexRequest);
	server.listen(2053);