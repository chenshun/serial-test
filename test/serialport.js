var should = require('should');
var json = require('./json/command');
var serialport = require('../lib/serialport'mocha.opts);

describe('#Serial Port Unit Test', function(){
	it('Should success write data to serial port', function() {
		serialport.write(json.upload)
	})
})
