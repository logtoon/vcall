var express = require('express');
var app = express();

/*// determining the port
var port = Number(process.env.PORT || '3000');

var server = app.listen(port, function() {
    console.log('Server is running on port ' + port);
});

// peerjs server setup
var peerServer = ExpressPeerServer(server);
app.use('/peerjs', peerServer);
peerServer.on('connection', function(id) { console.log(id); });*/


//setting port
var port = process.env.PORT || 8080

app.use(express.static(__dirname));

//routes
app.get("/",function(req, res){
	
	res.render("index");
	
	})
	
app.listen(port,function(){
	
	console.log("page running")
	})	