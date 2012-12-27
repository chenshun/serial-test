var SerialPort = require("serialport").SerialPort;

describe('Upload Packet', function(){
  it('should success send packet', function(done){
		var serialPort = new SerialPort("/dev/tty-usbserial1", {
			baudrate: 115200
		});

		serialPort.on("open", function () {
		  console.log('open');
		  serialPort.on('data', function(data) {
		    console.log('data received: ' + data);
		  });  
		  serialPort.write("ls\n", function(err, results) {
		    console.log('err ' + err);
		    console.log('results ' + results);
		  });  
		})    
  })
})