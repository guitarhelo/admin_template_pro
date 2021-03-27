import React, {useEffect, useState} from "react";
import Chart from "react-google-charts";


const data_dict=[[
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


],
    [
        ['Month', 'Visits', 'Page/Vist'],
        ['1', 1200, 420],
        ['2', 1170, 430],
        ['3', 690, 1120],
        ['4', 1030, 1400],
        ['5', 1630, 1500],
        ['6', 1400, 1700],
        ['7', 1830, 2500],
        ['8', 1230, 1200],
        ['9', 1530, 1100],
        ['10', 1230, 1500],
        ['11', 1930, 1700],
        ['12', 2030, 3400],


    ],


    [
        ['Month', 'Visits', 'Page/Vist'],
        ['1', 1500, 1400],
        ['2', 1670, 1460],
        ['3', 1660, 2120],
        ['4', 1030, 1400],
        ['5', 1030, 1600],
        ['6', 1400, 1700],
        ['7', 1030, 1800],
        ['8', 1230, 1700],
        ['9', 1530, 1100],
        ['10', 1730, 2500],
        ['11', 1930, 3700],
        ['12', 2030, 3400],


    ],
    [
        ['Month', 'Visits', 'Page/Vist'],
        ['1', 2000, 2400],
        ['2', 3170, 1460],
        ['3', 1660, 1120],
        ['4', 1830, 1400],
        ['5', 1330, 1500],
        ['6', 1400, 1900],
        ['7', 1530, 1800],
        ['8', 1230, 1200],
        ['9', 1530, 1100],
        ['10', 1730, 1500],
        ['11', 4930, 5700],
        ['12', 2030, 3400],


    ]





];



function random(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}
const LiveVisitersWidgets = () => {

    const [data, setData] = useState();


    let randomVisitData=1000+random(1,1000);
    let randomPageVisitData=700+random(1,700);


    useEffect(() => {
        console.log("count状态更新");

        let list = [];
        let myRandomData;
        for(let i = 0; i < 12; i++){
            myRandomData = [i.toString(),1000+random(1, 1000),500+random(1, 500)]
            list.push(myRandomData);
        }
         let randnum=random(0,3);
         setData(data_dict[randnum])
        console.log("List=====",list);

        return () => {
            console.log("useEffect卸载")
        }
    },[])

    return (
        <React.Fragment>

            <Chart
                width={'600px'}
                height={'200px'}
                style={{"position":"relative","left":"-10px","top":"-15px","margin-left": "0px;"}}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={data}
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

export default LiveVisitersWidgets;