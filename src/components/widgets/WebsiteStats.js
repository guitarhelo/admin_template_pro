import React from "react";
import Chart from "react-google-charts";

const WebsieStatsWidgets = () => {
    return (
        <React.Fragment>

            <Chart
                width={'700px'}
                height={'400px'}
                style={{"position":"relative","left":"-10px","top":"-15px","margin-left": "0px;"}}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Month', 'Visits', 'Page/Vist'],
                    ['1', 1000, 400],
                    ['2', 1170, 460],
                    ['3', 660, 1120],
                    ['4', 1030, 1400],
                    ['5', 1030, 1500],
                    ['6', 1400, 1700],
                    ['7', 1030, 1500],
                    ['8', 1230, 1200],
                    ['9', 1530, 1100],
                    ['10', 1730, 1500],
                    ['11', 1930, 1700],
                    ['12', 2030, 3400],


                ]}
                options={{
                    title: 'Company WebSite Stats',
                    hAxis: { title: 'Month', titleTextStyle: { color: '#333' } },
                    vAxis: { minValue: 0 },
                    // For the legend to fit, we make the chart area smaller
                    chartArea: { width: '50%', height: '70%' },
                    // lineWidth: 25
                }}

            />

        </React.Fragment>

    )};

export default WebsieStatsWidgets;