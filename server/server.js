const express = require('express');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const moment = require('moment')
const SerialPort = require('serialport');

app.use(express.static('client'));

const port = new SerialPort('COM3'); // Port your Arduino is connected to
const parser = new SerialPort.parsers.Readline();

port.pipe(parser);

port.on("open", function () {
  console.log('Port opened');
  parser.on('data', function (data) {
    const sensorData = {
      temperature: data,
      timestamp: moment().unix() // Unix timestamp
    }
    if (sensorData.temperature.includes("Temperature")) {
      sensorData.temperature = sensorData.temperature.replace("Temperature: ", "");
      io.emit('temperature-data', sensorData)
    }
  });
});

io.on('connection', (socket) => {
  console.log('connected');
  socket.on('disconnect', () => {
    console.log('disconnected');
  });
});

http.listen(3000, () => {
  console.log('listening on localhost:3000');
});