import React, { Component } from "react";
import Chart from "react-google-charts";



export default class GoogleLineDemo extends Component {
    render() {
        // @ts-ignore
        return (
            <div>

                <Chart
                    width={'400px'}
                    height={'300px'}



                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['x', 'PA', 'PB'],
                        [new Date(2014,0), 0, 0],
                        [new Date(2014,1), 10, 5],
                        [new Date(2014,2), 23, 15],
                        [new Date(2014,3), 17, 9],
                        [new Date(2014,4), 18, 10],
                        [new Date(2014,5), 9, 5],
                        [new Date(2014,6), 11, 3],
                        [new Date(2014,7), 27, 19],
                    ]}
                    options={{
                        hAxis: {
                            title: 'Year',
                        },
                        vAxis: {
                            title: 'Sales Amount',
                        },
                        series: {
                            1: { curveType: 'function' },
                        },
                    }}

                />

            </div>
        );
    }
}
