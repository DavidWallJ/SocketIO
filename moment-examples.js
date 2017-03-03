/**
 * Created by david on 3/3/17.
 */
var moment = require('moment');

var now = moment();

console.log(now.format('MMM Do YYYY, h:mm A'));

var timestamp = now.valueOf();
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));