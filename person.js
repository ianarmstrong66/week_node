let fs=require('fs');
let dbfcon=require('./dbConnection');
module.exports=
function showPerson(req,res,personID, deptID){
	console.log("In the display people function "+personID+  " " + deptID);
	let con=dbfcon();
	let queryStr="select * from personal";
	if (personID > 0){
		queryStr +=" where empNO = " + personID;
	}
	console.log("Query string is "+queryStr);
	con.query(queryStr,function(err,result){
		if (err){
			console.log("Error in query");
		} else{ 
			res.writeHead(200,{'Content-Type':'text/Html'});
			res.write("<html>");
			res.write("<head></head>");
			res.write("<body>");
			res.write("<h1>Person details page</h1>");
			res.write("<nav>");
			res.write("<a href='http://localhost:2053/'>Home</a>  |  ");
			res.write(`<a href='http://localhost:2053/showByDept?id=${deptID}'>Back</a>  |  `);
			res.write("<a href='http://localhost:2053/entryform'>Input form</a>  |  ");
			res.write("<a href='http://localhost:2053/showAll'>Show All</a>   |  ");
			res.write("<a href='http://localhost:2053/showEng'>Show Engineers</a>  |  ");
			res.write("<a href='http://localhost:2053/showHR'>Show Engineers</a>  |  <br>	");
			res.write("</nav>");
			res.write("<hr><br>");
			res.write("<table name='PerTable' id='PerTable' border='1px'>");
			res.write("<th>Person Details</th>");

			result.forEach(function(record){
				res.write("<tr><td>"+record.empNo+"</td></tr>");
				res.write("<tr><td>"+record.name+"</td></tr>");
				res.write("<tr><td>"+record.email+"</td></tr>");
				res.write("<tr><td>"+record.telephone+"</td></tr>");
			});
			res.write("</table>");
			res.write("</body>");
			res.write("</html>");
			res.end();
		}
	});
}