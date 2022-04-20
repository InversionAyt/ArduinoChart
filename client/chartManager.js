import { temperatureSettings } from './settings/temperature.js';
import { humiditySettings } from './settings/humidity.js';

var socket = io();
var sensorData = [];
var chartData = [];

var temperatureChart = new ApexCharts(document.querySelector("#temperatureChart"), temperatureSettings);
temperatureChart.render();

var humidityChart = new ApexCharts(document.querySelector("#humidityChart"), humiditySettings);
humidityChart.render();

socket.on('temperature-data', (content) => {
    sensorData.push(content);
    temperatureChart.updateSeries([{
        data: getNewSeries(getLastDate(), getLastTemperature())
    }])
})

socket.on('humidity-data', (data) => {
    humidityChart.updateSeries([Math.floor(data.humidity)])
})

function getLastTemperature() {
    return sensorData.slice(-1)[0].temperature;
}

function getLastDate() {
    return sensorData.slice(-1)[0].timestamp;
}

function getNewSeries(date, yAxis) {
    var newSerie = [date, yAxis]
    chartData.push(newSerie);
    return chartData;
}