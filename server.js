var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get ('/', function(req, res){
	res.send('metadata project');
});

app.listen(port, function(){
	console.log('metadata app listening on port ' + port);
});