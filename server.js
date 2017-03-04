/**
 * Created by david on 3/2/17.
 */
var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
    console.log('Connected to socket.io on the back-end');

    socket.on('message', function (message) {
       console.log(`Message received: ${message.text}`);

       message.timestamp = moment().valueOf();
       io.emit('message', message);
       // add time stamp
    });

    socket.emit('message', {
        text: 'Welcome to daveChat!',
        timestamp : moment().valueOf()
    });
});

http.listen(PORT, function () {
    console.log('Servers up!');
});