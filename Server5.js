let HTTP=require('http');
let F = function(Req, Res){
	Res.writeHead(200, {'content-type':'text/Html'});
	Res.write("<html>");
	Res.write("<center>");
	Res.write("<b>Welcome to</b><br />");
	Res.write("<h1>Nationwide</h1>");
	Res.write("</html>");
	Res.end();
}
let server=HTTP.createServer(Process);
	server.listen(2053);