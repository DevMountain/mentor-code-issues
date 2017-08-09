var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);  // <------- notice that we listen on the new server
                    //  we created not on app itself

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
