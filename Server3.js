let Ref=require('http');
let Process=function(req,res){
	let lookingFor = req.url;
	if (lookingFor=="/"){
		console.log("homePage");
		res.write("homePage")

	}
	else if (lookingFor =="/inbox"){
		console.log("inbox");
	}
	else if (lookingFor =="/QA"){
		console.log("login Page");
		res.write("<a href='https://www.qa.com/learners/graduate-academy/'>QA Consulting</a>")
	}
	else {  console.log("I just don't know");}
	res.end();
}
let server = Ref.createServer(Process);
server.listen(2051);