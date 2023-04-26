
//console.log ('my application ran successfully')

//Require or import the 'moment' modules in your application

const moment = require ('moment');

//Use 'moment' to output the timestamp for when the response arrives using the format h:mm:ss a.

const responseTimestamp = new moment();
console.log(responseTimestamp.format('h:mm:ss a')); 
