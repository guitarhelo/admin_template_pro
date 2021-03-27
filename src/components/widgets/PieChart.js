import React from "react";
import Chart from "react-google-charts";

const PieChartWidgets = () => {
    return (
        <React.Fragment>

            <Chart
                width={'160px'}
                height={'110px'}
                chartType="PieChart"
                style={{"position":"relative","left":"-40px","top":"-15px"}}
                loader={<div>Loading Chart</div>}
                data={[
                    ['Task', 'Hours per Day'],
                    ['US', 11],
                    ['Asia', 2],
                    ['Europe', 2],
                    ['Africa', 3],
                ]}
                options={{
                    title: 'Share Market',
                    // Just add this option
                    is3D: true,
                    legend: 'none',
                }}

            />

        </React.Fragment>

    )};

export default PieChartWidgets;