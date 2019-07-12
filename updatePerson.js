let dbfcon=require('./dbConnection');
module.exports=
function prepareUpdate(req,res,id,deptID){
	console.log("In the insert Record function");
	let con=dbfcon();
	let empNo="";
	let name="";
	let email="";
	let telephone="";
	let department="";
	let queryStr="select * from personal where empNo = "+id;
	let queryDept="select * from departments";
	let tableStr="";
	let optionStr="";

	con.query(queryStr,function(err1,result){
		if (err1) {
			console.log("Error in query");
			throw err;
		} else{
			console.log("No error in query");
			// result.forEach(function(record){
			// 	console.log(`Display form for update ${record.name}`);
			// });
			result.forEach(function(record){
				console.log("Reached record extract");
				tableStr="<tr><td><label>Name:</label></td>";
				tableStr+=`<td><input required=true type='Text' name='name' id='name' value='${record.name}'></input></td></tr>`;
				tableStr+="<tr><td><label>Email:</label></td>";
				tableStr+=`<td><input required=true type='email' name='email' id='email' value='${record.email}'></input></td></tr>`;
				tableStr+="<tr><td><label>Telephone:</label></td>";
				tableStr+=`<td><input required=true type='Text' name='telephone' id='telephone' value='${record.telephone}'></input></td></tr>`;
			});
		}
			console.log("Early table string: " +tableStr);
			return tableStr;
	});
	console.log("Out of query table string: " +tableStr);
				
	// con.query(queryDept, function(err2,resultDept){
	// 	if (err2) {console.log("You have the wrong query or database is disconnected");}
	// 	else{
	// 		resultDept.forEach(function(recordDept){
	// 			console.log(`Display form for depts ${recordDept.name}`);
	// 		});
	// 		resultDept.forEach(function(recordDept){
	// 			if (recordDept.deptID == deptID){
	// 				optionStr+=`<option selected='selected' value='${recordDept.deptID}'>${recordDept.name}</option>`;
	// 			} else { 
	// 				optionStr+=`<option value='${recordDept.deptID}'>${recordDept.name}</option>`;
	// 			}						
	// 		});
	// 	}
	// });

	res.writeHead(200,{'Content-Type':'text/Html'});
	res.write("<h1>Please make your updates here</h1><br>");
	res.write("<nav>");
	res.write("<a href='http://localhost:2053/'>Home</a>  |  ");
	res.write(`<a href='http://localhost:2053/showByDept?id=${deptID}'>Back</a>  |  `);
	res.write("<a href='http://localhost:2053/entryform'>Input form</a>  |  ");
	res.write("<a href='http://localhost:2053/showAll'>Show All</a>   |  ");
	res.write("<a href='http://localhost:2053/showEng'>Show Engineers</a>  |  ");
	res.write("<a href='http://localhost:2053/showHR'>Show Human Resourse</a>   |   ");			
	res.write("<a href='http://localhost:2053/showNames'>Show People</a><br>");
	res.write("</nav>");
	res.write("<br><hr><br>");
	res.write("<form action='/updateEmp' method='post'>");
	res.write("<table>");
	console.log("tableStr: "+tableStr);
	res.write(tableStr);
	res.write("<tr><td><label>Department:</label></td>");
	res.write("<td><select id='dept_option'>");
	console.log("optionStr "+optionStr);	
	res.write(optionStr);	
	res.write("</select></td></tr>");

// <tr><td><select><option value='1'>One</option><option selected="selected" value='2'>Two</option><option value='3'>Three</option></select></td></tr>

		// res.write(`<td><input required=true type='Text' name='deptID' id='deptID' value='${record.deptID}'></input></td></tr>`);
	// });
	res.write("</table>")
	res.write("<hr><input type='Submit' value='Update'>");
	res.write("</td>");
	res.write("</form>");
	res.end();
}