import React, { Component } from "react";
import { colors } from '../../constants';
import './chart.css';
// @ts-ignore
import Actions from './Actions';
import datasets from '../../data'
// @ts-ignore
import ChartFactory from './chartFactory';
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


 class LineDemo extends Component {

     state = {
         datasets,
         colors,
         reportNumber: 1
     }

    handleLegendHover = (id, datasetIndex, isActiveOneGraph, isPie) => {
        if (isPie) {
            if (isActiveOneGraph) {
                this.setState(prevState => ({
                    colors: prevState.colors.map((color, index) => {
                        return index !== datasetIndex ? 'rgba(0,0,0, 0.1)' : color
                    }),
                }))
            }
            else {
                this.setState(prevState => ({
                    colors,
                }))
            }
            this.setState(prevState => ({
                datasets: prevState.datasets.map(ds => {
                    if (ds.id === id) {
                        return {
                            ...ds,
                            redraw: isActiveOneGraph
                        }
                    }
                    else return ds
                })
            }))

        }
        else {
            this.setState(prevState => ({
                datasets: prevState.datasets.map(ds => {
                    if (ds.id === id) {
                        return {
                            ...ds,
                            redraw: isActiveOneGraph,
                            datasets: ds.datasets.map((dataset, index) => index === datasetIndex ? ({
                                ...dataset,
                                prevBorderWidth: dataset.borderWidth,
                                borderWidth: isActiveOneGraph ? dataset.activeBorderWidth : dataset.normalBorderWidth

                            }) : ({
                                ...dataset,
                                backgroundColor: isActiveOneGraph ? dataset.disabledColor : dataset.prevBackgroundColor,
                                borderColor: isActiveOneGraph ? dataset.disabledColor : dataset.prevBackgroundColor,
                                borderWidth: isActiveOneGraph ? dataset.disabledBorderWidth : dataset.normalBorderWidth
                            }))
                        }
                    }
                    else return ds
                })
            }))
        }
    }

    handleSizeChange = (size, id) => {
        this.setState(prevState => ({
            datasets: prevState.datasets.map(ds => ds.id === id ? ({
                ...ds,
                size,
                redraw: true,
                maxTicksLimit: this.getTicksLimit(size)
            }) : ds)
        }), () => {
            this.setState(prevState => ({
                datasets: prevState.datasets.map(ds => {
                    return ds.id === id ? ({
                        ...ds,
                        redraw: false,
                    }) : ds
                })
            }))
        })
    }

    /*
    handleReportTypeChange = (id, type) => {
        this.setState(prevState => ({
            datasets: prevState.datasets.map(ds => ds.id === id ? ({
                ...ds,
                type: type !== ds.type ? type : ds.type
            }) : ds)
        }))
    }
*/

     handleReportTypeChange = (id, type) => {
         this.setState(prevState => ({
             datasets:  datasets[0]}))

     }

    getContainerSize = size => {
        switch (size) {
            case 'small':
            default:
                return 'calc(100%/3 - 20px)'
            case 'medium':
                return 'calc(100%/3*2 - 20px)'
            case 'large':
                return '100%'
        }
    }

    getTicksLimit = size => {
        switch (size) {
            case 'small':
                return 5
            case 'medium':
                return 9
            case 'large':
                return 15
            default:
                return 10
        }
    }
    render() {
        return (


            <div key={datasets[0].id}
                 className={'AppChartWrapper'}
                 style={{ width: this.getContainerSize(datasets[0].size) }}>
                <div className={'ChartWrapper'} style={{"width": "340px;",
                    "height": "290px;"}}>

                    <Actions handleSizeChange={this.handleSizeChange}
                             handleReportTypeChange={this.handleReportTypeChange}
                             id={datasets[0].id}/>
                    <ChartFactory
                        data={datasets[0]}
                        onLegendHover={this.handleLegendHover}
                        colors={this.state.colors}/>
                </div>
            </div>


        );
    }
}

export default LineDemo;