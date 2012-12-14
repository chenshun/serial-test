var serialport = require("serialport");
var SerialPort = serialport.SerialPort; // localize object constructor
  
var sp = module.exports = new SerialPort("/dev/ttyS0", { 
  baudrate: 115200
});
