var buf = Buffer.from('abcde');//convert binary data
console.log(buf);

var x = Buffer.from('abcdefg');
var y = x.slice(2,5);
console.log(y.toString());

var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('my', function() {   //on - add specified listener
  console.log('hello world');
});
eventEmitter.emit('my');


var path = require('path');
var filename = path.basename('/home/akhil/AkhilICTKerala/ICT-Kerala/HW/fs.js');
console.log(filename);



var myInt = setInterval(function () {
    console.log("Hello");
}, 50000000);