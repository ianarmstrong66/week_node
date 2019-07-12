let express=require("express");
let URL=require("url");
let cookieparser=require("cookie-parser");
app=express();
app.use(cookieparser());
	
app.get("/",function(req,res){
	console.log("Reached home page");
	res.write("<html>");
	res.write("<center>");
	res.write("<b>Welcome to</b>");
	res.write("<h1>Nationwide</h1><br />");	
	res.write("<h1>Select first number to add</h1>");
	for (let i=1; i<=10; i++){
		res.write("<a href='http://localhost:8000/showRange?No1="+i+"'>"+i+"<\a>");
		res.write("<br />");
	}
	res.write("</center>");
	res.write("</html>");
	res.end();
});

app.get("/showRange",function(req,res){
	console.log("Reached second page");
	let firstNo=URL.parse(req.url,true).query.No1;	
	console.log("First Number: "+firstNo);
	if (firstNo == undefined||firstNo<0){
		res.writeHead(302,{'Location':'/'});
		res.end();
	}	else{
		res.cookie("NBS_Cookie1",firstNo);

		res.write("<html>");
		res.write("<center>");
		res.write("<b>Welcome to</b>");
		res.write("<h1>Nationwide</h1><br>");
		res.write("<h1>Select Range</h1>");
		res.write("<p>first number was "+ firstNo+"</p>");
		for (let i=10; i <=100; i+=10){
			res.write("<a href='http://localhost:8000/showTimesTable?No2="+i+"'>"+i+"</a><br />");
		}
		res.write("</center>");
		res.write("</html>");
		res.end();
	}
});
app.get("/showTimesTable",function(req,res){

	let firstNo = parseInt(req.cookies.NBS_Cookie1);
	console.log("Cookie value "+ firstNo);

	if (firstNo == undefined||isNaN(firstNo) ||firstNo<1){
		res.writeHead(302,{'Location':'/'});
		res.end();
	}	else{


		let secondNo=parseInt(URL.parse(req.url,true).query.No2);
		console.log("Range: "+ secondNo);

		res.write("<html>");
		res.write("<a href='http://localhost:8000/'>Back to start</a>");
		res.write("<center>");
		res.write("<b>Welcome to</b>");
		res.write("<h1>Nationwide</h1><br />");
		for (let i=1;i<=secondNo;i++){
		res.write("<h2> You're result of "+firstNo +" x "+ i + " is "+(firstNo*i)+"</h2>");
		}
		res.write("<a href='http://localhost:8000/'>Back to start</a>");
		res.write("</center>");
		res.write("</html>");
		res.end();
	}
});

// app.listen(8000);

app.listen(8000,function(){
	console.log("Server8 started");
});