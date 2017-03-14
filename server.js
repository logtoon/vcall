var express = require('express');
var app = express();
var PeerServer = require('peer').PeerServer;

//setting port
var port = process.env.PORT || 8080

app.use(express.static(__dirname));

//routes
app.get("/",function(req, res){
	
	res.render("index");
	
	})
	
app.listen(port,function(){
	
	console.log("app running")
	})	
	

var server = PeerServer({port: 443, path: '/peerjs'});
	