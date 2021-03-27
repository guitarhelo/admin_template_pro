import React from "react";
import Chart from "react-google-charts";

const YearSalesReportWidgets = () => {
    return (
        <React.Fragment>

            <Chart
                width={'600px'}
                height={'300px'}
                style={{"position":"relative","left":"-10px","top":"-15px","margin-left": "0px;"}}

                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Year', 'Sales', 'Expenses'],
                    ['2013', 1000, 400],
                    ['2014', 1170, 460],
                    ['2015', 660, 1120],
                    ['2016', 1030, 540],
                    ['2017', 1050, 1540],
                    ['2018', 1070, 2540],
                    ['2019', 1080, 3540],
                    ['2020', 1090, 4540],
                ]}
                options={{
                    title: 'Company Performance',
                    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                    vAxis: { minValue: 0 },
                    // For the legend to fit, we make the chart area smaller
                    chartArea: { width: '50%', height: '70%' },
                    // lineWidth: 25
                }}
                // For tests
                rootProps={{ 'data-testid': '1' }}
            />
        </React.Fragment>

    )};

export default YearSalesReportWidgets;