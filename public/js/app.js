/**
 * Created by david on 3/2/17.
 */
var socket = io();

socket.on('connect', function () {
   console.log('Connected to socket.io on the front-end!');
});