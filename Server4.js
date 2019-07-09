let HTP=require('http');
let URL=require('url');
// let QS=require('querystring');
let Process=function(req,res){
	let data=URL.parse(req.url,true);
	let no1=parseInt(data.query.No1);
	let no2=parseInt(data.query.No2);
	if (data.pathname=="/sub"){
		console.log("Result : " + (no1-no2));
		res.write("Result : " + (no1-no2));
	}
	else if (data.pathname=="/add"){
		console.log("Result : " + (no1+no2));
		res.write("Result : " + (no1+no2));
	}
	else {console.log("nothing to process");
		res.write("nothing to process");
	}
	res.end();
}
let server=HTP.createServer(Process);
	server.listen(2053);