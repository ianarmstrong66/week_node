let HTTP=require('http');
let URL=require('url');
let Process=function(req,res){
	res.writeHead(200, {'content-type':'text/Html'});
	res.write("<html>");
	res.write("<center>");
	res.write("<b>Welcome to</b>");
	res.write("<h1>Nationwide</h1><br />");
	res.write("</center>");
	let path=URL.parse(req.url,true).pathname;	
	console.log("Check for path" + path);
	if (path=="/"){
		console.log("Reached home page");
		res.write("<center>");
		res.write("<input type='text' name='firstNo' id='firstNo'></input>");		
		res.write("<h1>Select first number to add</h1>");
		for (let i=1; i<=10; i++){
			res.write("<a href='http://localhost:2053/second?No1="+i+"'>"+i+"<\a>");
			res.write("<br />");
		}
		res.write("</center>");
	}
	else if (path=="/second"){
		console.log("Reached second page");
		let firstNo=URL.parse(req.url,true).query.No1;
		res.write("<h1>Select second number</h1>");
		res.write("<p>first number was "+ firstNo+"</p>");
		for (let i=1; i <=10; i++){
			res.write("<a href='http://localhost:2053/result?No1="+firstNo+"&No2="+i+"'>"+i+"</a><br />");
		}
	}
	else if (path=="/result"){
		let firstNo=parseInt(URL.parse(req.url,true).query.No1);
		let secondNo=parseInt(URL.parse(req.url,true).query.No2);
		res.write("<h2> You're result is "+(firstNo+secondNo)+"</h2>");
		res.write("<br />");
		res.write("<a href='http://localhost:2053'>Back to start</a>");
	}
	else{res.write("<h1>Error<br />You should not have reached this number</h1><br />");}

	res.write("</html>");
	res.end();
}
let server=HTTP.createServer(Process);
	server.listen(2053);