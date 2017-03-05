/**
 * Created by david on 3/2/17.
 */
var socket = io();
var name = getQueryVar('name') || 'Anonymous';
var room = getQueryVar('room');

// Update room h1 tag on the chat.html page
$('.room-title').text(room);

socket.on('connect', function () {
   console.log('Connected to socket.io on the front-end!');

   socket.emit('joinRoom', {
       name: name,
       room: room
   });
});

socket.on('message', function (message) {
    var timestampMoment = moment.utc(message.timestamp);
    var $message = jQuery('.messagesArea');

    console.log(`New message: ${message.text}`);

    $message.append(`<p><strong>${message.name} ${timestampMoment.local().format('h:mm a')}</strong>:`);
    $message.append(`<p>${message.text}</p>`);

});

// Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
    event.preventDefault();
    // prevents the form from submitting in the default manner

    var $message = $form.find('input[name=message]');

    socket.emit('message', {
        text: $message.val(),
        name: name
    });

    $message.val('');
    // this erases the value in the form input field

});