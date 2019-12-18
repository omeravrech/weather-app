import React, { Component } from 'react';
import Chart from 'chart.js';

const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];


class WeatherChart extends Component {
    static propTypes = {
        chartForecastData: (props, propName, componentName) => {
            if (!Array.isArray(props[propName])) {
                return new Error(`Invalid prop ${propName} passed to ${componentName}.`);
            }
        }
    }
    constructor(props) {
        
        super(props);
        
        this.labels = [];  
        this.maximumTempArray = [];
        this.minimumTempArray = []; 
        this.ticks = {min: 0, max: 1000, stepSize: 5};

        this.parseData(props.chartForecastData);
    }
    parseData(rowData) {
        rowData.forEach(element => {
            const { Temperature } = element;
            this.labels.push(days[(new Date(element.Date)).getDay()]);
            this.minimumTempArray.push(Temperature.Minimum.Value);
            this.maximumTempArray.push(Temperature.Maximum.Value);
        });

        let temp = Math.min(...this.minimumTempArray) - this.ticks.stepSize;
        this.ticks.min = temp + (this.ticks.stepSize - Math.abs(temp % this.ticks.stepSize));
        temp = Math.max(...this.maximumTempArray) + this.ticks.stepSize;
        this.ticks.max = temp - Math.abs(temp % this.ticks.stepSize);

        console.log(this.minimumTempArray, this.maximumTempArray);
    }

    componentDidMount() {
        const node = this.node;
        new Chart(node, {
            type: "line",
            data: {
                labels: this.labels,
                datasets: [{
                    label: '',
                    data: this.minimumTempArray, 
                    backgroundColor: [ 'lightblue' ],
                    borderColor: [ 'lightblue' ],
                    borderWidth: 0,
                    pointRadius: 0
                },{
                    label: '',
                    data: this.maximumTempArray,
                    backgroundColor: [ 'rgba(255, 204, 0 ,0.3)' ],
                    borderColor: [ 'rgba(255, 204, 0 ,0.3)' ],
                    borderWidth: 0,
                    pointRadius: 0
                }]
            },
            options: {
                scales: {
					yAxes: [{
						ticks: this.ticks
					}]
				}
            }
        });
    }
    render() {
        return (
            <div>
                <canvas ref={node => (this.node = node)} />
            </div>
        );
    }
}

export default WeatherChart