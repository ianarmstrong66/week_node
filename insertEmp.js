let dbfcon=require('./dbConnection');
module.exports=
function insertRecord(req,res,employee){
	console.log("In the insertRecord function");
	let con=dbfcon();
	let empNo="";
	let name="";
	let email="";
	let telephone="";
	let department="";
	console.log("name : "+ employee.name);
	// let queryStr="insert into personal values('"+empNO+"','"+name+"','"+
	// 			email+"','"+telephone+"','"+department+"')";
	let queryStr="insert into personal values ?";
	let values = [[empNo,name,email,telephone,department]];
	con.query(queryStr,[values],function(err,result){
		if (err) {throw err;
			console.log("Error in query");
		} else{
			console.log("Query should of completed")
			res.writeHead(200,{'Content-Type':'text/Html'});
			res.write("<nav>");
			res.write("<a href='http://localhost:2053/entryform'>Input form</a>  |  ");
			res.write("<a href='http://localhost:2053/showAll'>Show All</a>   |  ");
			res.write("<a href='http://localhost:2053/showEng'>Show Engineers</a>  |  ");
			res.write("<a href='http://localhost:2053/showHR'>Show Human Resourse</a>   |   ");			
			res.write("<a href='http://localhost:2053/showNames'>Show People</a><br>");
			res.write("</nav>");
			result.forEach(function(record){
				res.write(""+record.empNo+"<br>");
				res.write(""+record.name+"<br>");
				res.write(""+record.email+"<br>");
				res.write(""+record.telephone+"<br><br>");
			})
			res.end();
		}
	})
}