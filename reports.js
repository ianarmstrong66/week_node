let dbfcon=require('./dbConnection');
module.exports=
function showRecord(req,res,depID){
	console.log("In the showRecord function");
	let con=dbfcon();
	let queryStr="select * from personal";
	if (depID>0){
		queryStr +=" where deptID ="+depID;
	}
	con.query(queryStr,function(err,result){
		if (err){
			console.log("Error in query");
		} else{
			console.log("Query should of completed")
			res.writeHead(200,{'Content-Type':'text/Html'});
			res.write("<nav>");
			res.write("<a href='http://localhost:2053/entryform'>Input form</a>  |  ");
			res.write("<a href='http://localhost:2053/showAll'>Show All</a>   |  ");
			res.write("<a href='http://localhost:2053/showEng'>Show Engineers</a>  |  ");
			res.write("<a href='http://localhost:2053/showHR'>Show Human Resourse</a><br>");
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