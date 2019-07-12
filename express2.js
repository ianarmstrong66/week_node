let express=require("express");
let app=express();

app.get("/process", function(req,res){
	res.send(" Home page blues");
});

app.post('/process', function(req,res){
	res.send(" Time to update");
});

app.patch('/process', function(req,res){
	res.send(" its and eye patch");
});

app.delete('/process', function(req,res){
	res.send(" time to take out the trash");
});

app.all('/process', function(req,res){
	res.send(" not sure what All is supposed to do");
});

app.listen(8000);