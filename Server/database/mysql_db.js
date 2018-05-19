/*KevinC*/

var mysql = require("mysql");

exports.open_connection_default = function(){
	var connection = mysql.createConnection({
	  host     : 'xxx',
	  user     : 'xxx',
	  password : 'xx',
	  database : 'xx'
	});
	return connection;
};

exports.open_connection = function(host, user, password, database){
	
	var connection = mysql.createConnection({
	  host     : host,
	  user     : user,
	  password : password,
	  database : database
	});

	return connection;
};

