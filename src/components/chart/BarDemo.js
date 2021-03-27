import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            backgroundColor: "rgba(50,104,181,0.2)",
            borderColor: "rgba(50,104,181,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(50,104,181,0.4)",
            hoverBorderColor: "rgba(50,104,181,1)",
            data: [24, 44, 67, 90, 50, 82, 28]
        }
    ]
};

const options = {
    scales: {
        xAxes: [
            {
                gridLines: {
                    display: false
                },
                ticks: {}
            }
        ],
        yAxes: [
            {
                gridLines: {
                    drawBorder: false
                },
                ticks: {
                    // display: false,

                    lineHeight: 4,
                    callback: value => {
                        return `${value}%`;
                    }
                }
            }
        ]
    },
    legend: {
        fullWidth: true,
        display: true,
        position: "bottom",
        align: "start"
    }
};

export default class BarDemo extends Component {
    render() {
        return (
            <div>
                <h2>Bar Example (custom size)</h2>
                <Bar data={data} width={100} height={30} options={options} />
            </div>
        );
    }
}
