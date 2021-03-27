import React from "react";
import Chart from "react-google-charts";

const BarChartWidgets = () => {
    return (
        <React.Fragment>

            <Chart
                width={'500px'}
                height={'300px'}
                chartType="Bar"



                loader={<div>Loading Chart</div>}
                data={[
                    ['Week', 'Sales', 'Expenses', 'Profit'],
                    ['Day1', 1000, 400, 200],
                    ['Day2', 1170, 460, 250],
                    ['Day3', 660, 1120, 300],
                    ['Day4', 1030, 540, 350],
                    ['Day5', 1030, 520, 650],
                    ['Day6', 1080, 550, 690],
                ]}
                options={{
                    // Material design options
                    chart: {
                        title: 'Company Performance',
                        subtitle: 'Sales, Expenses, and Profit: 2020.8.27.-2020.9.1',
                    },
                }}

            />
        </React.Fragment>

    )};

export default BarChartWidgets;