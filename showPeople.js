let fs=require('fs');
let dbfcon=require('./dbConnection');
module.exports=
function showByDept(req,res,deptNo){
	console.log("In the disply people function");
	let con=dbfcon();
	let queryStr="select empNo as id, name as name from personal";
	if (deptNo > 0){
		queryStr +=" where deptID = " + deptNo;
	}

	con.query(queryStr,function(err,result){
		if (err){
			console.log("Error in query");
		} else{
			res.writeHead(200,{'Content-Type':'text/Html'});
			res.write("<html>");
			res.write("<head></head>");
			res.write("<body>");
			res.write("<h1>Welcome to the people management page</h1>");
			res.write("<nav>");
			res.write("<a href='http://localhost:2053/'>Home</a>  |  ");
			res.write("<a href='http://localhost:2053/entryform'>Input form</a>  |  ");
			res.write("<a href='http://localhost:2053/showAll'>Show All</a>   |  ");
			res.write("<a href='http://localhost:2053/showEng'>Show Engineers</a>  |  ");
			res.write("<a href='http://localhost:2053/showHR'>Show Engineers</a>  |  <br>	");
			res.write("</nav>");
			res.write("<hr><br>");
			res.write("<table name='EmpTable' id='EmpTable' border='1px'>");
			res.write("<th>Name</th><th>Operation</th>");

			result.forEach(function(record){
				let delLink=`<a href='http://localhost:2053/deletePerson?id=${record.id}&deptID=${deptNo}'>delete</a>`;
				let updLink=`<a href='http://localhost:2053/updatePerson?id=${record.id}&deptID=${deptNo}'>update</a>`;
				let nameLink=`<a href='http://localhost:2053/showPerson?id=${record.id}&deptID=${deptNo}'>${record.name}</a>`;
				res.write("<tr><td>"+nameLink+"</td>");
				res.write("<td>"+delLink+", "+updLink+"</td></tr>");
			});
			res.write("</table>");
			res.write("</body>");
			res.write("</html>");
			res.end();
		}
	});
}