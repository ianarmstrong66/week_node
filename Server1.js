let HTP = require('http');
let aFunction= function(req,res){
	console.log("The many trains of thought");
} 
server = HTP.createServer(aFunction);
server.listen(4052);