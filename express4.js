let express=require("express");
let app=express();

app.use(function(req,res,next){
	console.log("I am the one and only");
	next();
});

app.use("/",function(req,res,next){
	console.log("I am the two and only");
	next();
});

app.use("/login",function(req,res,next){
	console.log("I am the three and only");
	next();
});

app.get("/",function(req,res){
	res.send("Welcome to the machine")
})

app.get("/login",function(req,res){
	res.send("Welcome to the login machine")
})

app.get("/logout",function(req,res){
	res.send("Welcome to the logout machine")
})

let server=app.listen(8000);