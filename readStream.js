let HTTP=require('http');
let fs=require('fs');

HTTP.createServer(function(req,res){
let readable=fs.createReadStream('./file.txt');
let count=0;
// readable.on('data',function(abc){
// 	count+=1;
// 	console.log("buffer filled "+ count + " " );
// });
readable.on('open', function(){
readable.pipe(res);
});
readable.on("end", function(){
	console.log("Data reading from the file is done");
});
}).listen(8080);
