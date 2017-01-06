var express = require('express')
var app = express()

var port = process.env.PORT || 8080

var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

app.get ('/', function(req, res){
	res.sendFile(__dirname + '/index.html')
})

app.post('/api/file', upload.single('userFile'), function(req, res, next){

	var sizeObj = {
		size: req.file.size
	}

	var size = sizeObj;
	res.send(size)
	console.log('SIZE OF FILE: ' + size )
})

app.listen(port, function(){
	console.log('metadata app listening on port ' + port);
})