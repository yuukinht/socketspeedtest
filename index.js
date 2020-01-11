var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 3000, listen);;
app.use(express.static('public'));

var player = {};

var io = require('socket.io')(server);
io.sockets.on('connection',
  function (socket) { 
	var id = socket.id;
	player[id]=socket;
  }
);
setInterval(function(){
	for (var i in player){
		player[i].emit("test",{time:Date.now()});
	}
},1000/500);
