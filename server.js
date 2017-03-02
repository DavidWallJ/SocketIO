/**
 * Created by david on 3/2/17.
 */
var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

http.listen(PORT, function () {
    console.log('Servers up!');
});