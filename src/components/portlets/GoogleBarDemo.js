import React, { Component } from "react";
import Chart from "react-google-charts";



export default class GoogleBarDemo extends Component {
    render() {
        return (
            <div>

                <Chart
                    width={'620px'}
                    height={'300px'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Week', 'Sales', 'Expenses', 'Profit'],
                        ['Monday', 1000, 400, 200],
                        ['Tuesday', 1170, 460, 250],
                        ['Wednesday', 1200, 470, 250],
                        ['Thursday', 1256, 470, 300],
                        ['Friday', 1678, 540, 350],
                        ['Saturday', 1710, 400, 330],
                        ['Sunday', 1845, 400, 340],


                    ]}
                    options={{
                        // Material design options
                        chart: {
                            title: 'Company Performance',
                            subtitle: 'Sales, Expenses, and Profit: 2020.8.3-2020.8.9',
                        },
                    }}

                />



            </div>
        );
    }
}
