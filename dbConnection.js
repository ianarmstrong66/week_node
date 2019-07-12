let mysql=require('mysql');
module.exports = function connection(){
	let con=mysql.createConnection({
		host:"localhost",
		user:"root",
		password:"Un1f1",
		database:"tdp"
	});
	con.connect(function(err){
		if (err){
			console.log("Error in connection" + err);
		}else{
			console.log("Connected!");
		}
	});
	return con;
}