var should = require('should');
var json = require('./json/command');
var serialport = require('../lib/serialport');

describe('#Serial Port Unit Test', function(){
	it('Should success write data to serial port', function() {
		console.log(json.upload);
		serialport.write(json.upload)
	})
})
