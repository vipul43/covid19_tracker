import React, { useState, useEffect } from 'react'
import { Line } from "react-chartjs-2";

const buildChartData = (data, casesType='cases') => {
    const chartData = [];
    let lastDataPoint;
    for(let date in data.cases) {
        if (lastDataPoint) {
            const newDataPoint = {
                x: date,
                y: data['cases'][date] - lastDataPoint
            };
            chartData.push(newDataPoint);
        }
        lastDataPoint = data['cases'][date];
    }
    return chartData;
};

function LineGraph() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
        .then((response) => response.json())
        .then(data => {
            const chartData = buildChartData(data);
            setData(chartData);
        });
    }, []);

    return (
        <div>
            <Line data={{
              datasets: [{
                //   backgroundColor: "rgba"
                  data: data
              }]  
            }}/>            
        </div>
    )
}

export default LineGraph
