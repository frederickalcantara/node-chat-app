const moment = require('moment');

// Standard UNIX Time: Jan 1st 1970 00:00:00 am

// let date = new Date();
// let months = ['Jan', 'Feb'];
// console.log(date.getMonth());

// let date = moment();
// date.add(100, 'years').subtract(11, 'months');
// console.log(date.format('MMM Do, YYYY'));

let someTimestamp = moment().valueOf(); // new Date().getTime()
console.log(someTimestamp);

let createdAt = 1234
let date = moment(createdAt);
console.log(date.format('h:mm a'));