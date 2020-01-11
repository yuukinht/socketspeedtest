var socket;
function setup() {
	socket = io.connect('http://localhost:3000');
    socket.on('test', function(data) {
		console.log(data.time + " - " + Date.now());		
    });	
}
function draw() {
	clear();
}