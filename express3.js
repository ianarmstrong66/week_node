let express=require('express');
let app=express();

app.route('/process')
.get(function(req,res){
	res.send('Process get method')
})
.post(function(req,res){
	res.send('Process post method')
})
.put(function(req,res){
	res.send('Process put method')
})

app.route('/NBSprocess')
.get(function(req,res){
	res.send('NBSprocess get method')
})
.post(function(req,res){
	res.send('NBSprocess post method')
})
.put(function(req,res){
	res.send('NBSprocess put method')
})

app.listen(8000);