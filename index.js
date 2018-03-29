var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 80

app.get('/', function(req, res){
  res.sendFile(__dirname + "/client/client.html");
});

app.get('/client.js', function(req, res){
  res.sendFile(__dirname + "/client/client.js");
});

app.get('/style.css', function(req, res){
  res.sendFile(__dirname + "/client/style.css");
});

io.on('connection', function(socket){
  data = {};
  console.log(socket.id + ' connected');
  socket.on('disconnect', function(){
    console.log(socket.id + ' disconnected');
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
}); 