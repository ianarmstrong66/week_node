let _maths=require('./math.js');
let HTTP=require('http');
let URL=require('url');
let Process=function(req,res){
	let path=URL.parse(req.url,true).pathname;	
	if (path=="/"){
		res.writeHead(200,{'Content-Type':'text/Html'});
		res.write("<html>")
		res.write("<center>");
		res.write("<input required='true' type='text' name='firstNo' id='firstNo' placeholder='Enter number'></input> and  ");	
		res.write("<input required='true' type='text' name='secondNo' id='secondNo' placeholder='Enter number'></input>");	
		res.write("<hr><br />");
		res.write("<button type='button' onclick='()=>{")
		res.write("<a href=`http://localhost:2053/add?No1=${firstNo}&No2=${secondNo}`>Add</a><br />");
		res.write("<a href='http://localhost:2053/subtract?No1=${firstNo}&No2=${secondNo}'>Subtract</a><br />");
		res.write("</center>");
		res.write("</html>")
	}
	else if (path=="/add"){
		let firstNo=URL.parse(req.url,true).query.No1;
		let secondNo=URL.parse(req.url,true).query.No2;		
		result = _maths.mathAdd(firstNo,secondNo);
		console.log(result);
		res.write("<html>")
		res.write("<a href='http://localhost:2053'>Back to start</a>");
		res.write("<h1>Your addition has resulted in "+ result+"</h1>");
		res.write("</html>")
	}else if (path=="/subtract"){
		let firstNo=URL.parse(req.url,true).query.No1;
		let secondNo=URL.parse(req.url,true).query.No2;
		result = mathAdd(firstNo,secondNo);
		console.log(result);
		result = _maths.mathSub(firstNo,secondNo);
		res.write("<html>")
		res.write("<a href='http://localhost:2053'>Back to start</a>");
		res.write("<h1>Your addition has resulted in "+ result+"</h1>");
		res.write("</html>")
	}
	
	res.end();
}
let server=HTTP.createServer(Process);
	server.listen(2053);