var humiditySettings = {
    series: [0],
    chart: {
        height: 350,
        type: 'radialBar',
        offsetY: -10
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: '16px',
                    offsetY: 120
                },
                value: {
                    offsetY: 76,
                    fontSize: '22px',
                    formatter: function (val) {
                        return val + "%";
                    }
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            shadeIntensity: 0.3,
        },
    },
    stroke: {
        dashArray: 4
    },
    labels: ['Nem orani'],
    title: {
        text: '',
        align: 'left',
        style: {
            fontSize: '14px',
            color: '#3498DB'
        }
    },
};

export { humiditySettings };