let express=require("express");
let app=express();

app.get('/trainer/:name/lives/:address', function(req,res){
	console.log(req.params);
	let N= req.params.name;
	let A=req.params.address;
	res.write(N + " lives at " + A);
});
app.listen(8000);