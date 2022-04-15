var temperatureSettings = {
    series: [{
        name: "Temperature",
        data: []
    }],
    chart: {
        id: 'chart',
        height: 350,
        type: 'line',
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        },
        zoom: {
            enabled: false
        },
    },
    colors: ['#001eff'],
    dataLabels: {
        enabled: true,
        style: {
            fontSize: '13px',
            fontWeight: 'bold'
        },
        background: {
            enabled: true,
            foreColor: '#fff',
            padding: 4,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#fff',
            opacity: 0.9,
        },
    },
    grid: {
        padding: {
            left: 15,
            right: 15
        }
    },
    stroke: {
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.2,
            opacityTo: 0.8,
        }
    },
    markers: {
        size: 4
    },
    xaxis: {
        type: 'datetime',
        categories: [],
        range: 30,
        title: {
            text: "Time",
            offsetY: 10
        },
        labels: {
            rotateAlways: true,
            rotate: -30,
            offsetX: 15,
            offsetY: 10,
            formatter: function (value) {
                return new Date(value * 1000).toLocaleTimeString();
            }
        },
        axisBorder: {
            color: '#575757'
        },
        axisTicks: {
            color: '#575757',
        },
    },
    yaxis: {
        opposite: true,
        title: {
            text: "Celsius"
        },
        labels: {
            offsetX: -10
        }
    },
    title: {
        text: 'DHT 11 Sensor',
        align: 'left',
        style: {
            fontSize: '14px',
            color: '#3498DB'
        }
    },
};

export { temperatureSettings };