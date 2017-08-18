
whiteboard.on('draw', function(...payloads){
  console.log(payloads)
});

// Never seen window.location before?
// This object describes the URL of the page we're on!
var socket = io(window.location.origin);

socket.on('connect', function () {
    console.log('I have made a persistent two-way connection to the server!');
});

socket.on('disconnect', function () {
    console.log('Woe is me :(');
});

