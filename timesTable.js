let HTTP=require('http');
let URL=require('url');
let Process=function(req,res){
	res.writeHead(200, {'content-type':'text/Html'});
	res.write("<html>");
	res.write("<center>");
	res.write("<b>Welcome to</b>");
	res.write("<h1>Nationwide</h1><br />");
	let path=URL.parse(req.url,true).pathname;	
	if (path=="/"){
		res.write("<center>");
		res.write("<input type='text' name='firstNo' id='firstNo'></input>");		
		res.write("<h1>Select times table</h1><br /><hr>");
		for (let i=1; i<=10; i++){
			res.write("<a href='http://localhost:2053/range?No1="+i+"'>"+i+"<\a>");
			res.write("<br />");
		}
		res.write("</center>");
	}
	else if (path=="/range"){
		let firstNo=URL.parse(req.url,true).query.No1;
		res.write("<a href='http://localhost:2053'>Back to start</a>");
		res.write("<h1>Times table of "+ firstNo+"</h1>");
		res.write("<p>Select range</p>");
		for (let i=10; i <=100; i +=10){
			res.write("<a href='http://localhost:2053/result?No1="+firstNo+"&No2="+i+"'>"+i+"</a><br />");
		}
	}
	else if (path=="/result"){
		let firstVal = URL.parse(req.url,true).query.No1;
		let secondVal = URL.parse(req.url,true).query.No2
		let firstNo=parseInt(firstVal);
		let secondNo=parseInt(secondVal);
		res.write("<a href='http://localhost:2053'>Back to start</a> | ");
		res.write("<a href='http://localhost:2053/range?No1="+firstVal+"'>Back to range</a>");
		res.write("<h1>Times table of "+ firstNo+"</h1>");
		for (let i = 1; i <= secondNo; i++){
			res.write("<h2> You're result of "+firstVal +"x"+i+"="+(firstNo * i)+"</h2>");
		}
		res.write("<br />");

		res.write("<a href='http://localhost:2053'>Back to start</a> | ");
		res.write("<a href='http://localhost:2053/range?No1="+firstVal+"'>Back to range</a>");
	}
	else{res.write("<h1>Error<br />You should not have reached this number</h1><br />");
		 res.write("<a href='http://localhost:2053'>Back to start</a>");}

	res.write("</center>");
	res.write("</html>");
	res.end();
}
let server=HTTP.createServer(Process);
	server.listen(2053);