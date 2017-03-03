/**
 * Created by david on 3/2/17.
 */
var socket = io();

socket.on('connect', function () {
   console.log('Connected to socket.io on the front-end!');
});

socket.on('message', function (message) {
    console.log(`New message: ${message.text}`);
    jQuery('.messages').append(`<p>${message.text}</p>`);
    jQuery('.messages').append(`<p>${message.timestamp}</p>`);
});

// Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
    event.preventDefault();
    // prevents the form from submitting in the default manner

    var $message = $form.find('input[name=message]');

    socket.emit('message', {
       text: $message.val()
    });

    $message.val('');

});