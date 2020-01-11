var socket;
function setup() {
	socket = io();
    socket.on('test', function(data) {
		console.log(data.time + " - " + Date.now());		
    });	
	socket.emit('time',{time:Date.now()});
}
function draw() {
	clear();
}
