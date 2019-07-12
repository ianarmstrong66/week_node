let dbfcon=require('./dbConnection');
module.exports=
function showDept(req,res){
	console.log("In the showDept function");
	let con=dbfcon();
	let queryStr="select * from departments";	
	con.query(queryStr,function(err,result){
		if (err) {throw err;
			console.log("Error in query");
		} else{
			res.write("<table border='2px'><th>Department</th>");
			result.forEach(function(record){
				let nameLink=`<a href='http://localhost:2053/showByDept?id=${record.deptID}'>${record.name}</a>`;
				console.log(nameLink);
				res.write("<tr><td>"+nameLink+"</td></tr>");
			});
			res.write("</table>");

			res.end();
		}
	})
}