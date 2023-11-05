"use client"; // for development only

import React, { useEffect, useState } from 'react';
import { Chart, CategoryScale, Colors } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale);
Chart.register(Colors);

const MarketPerformance: React.FC = () => {
  const [chartData, setChartData] = useState<number[]>([]);
  useEffect(() => {
    const randomData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
    setChartData(randomData);
  }, []);

  const [predictedChartData, setPredictedChartData] = useState<number[]>([]);
    useEffect(() => {
    const randomData = Array.from({ length: 2 }, () => Math.floor(Math.random() * 100));
    setPredictedChartData(randomData);
    }, []);

    // set last value of chartData to be the first value of predictedChartData
    predictedChartData[0] = chartData[chartData.length - 1];

    const options: any = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
    scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Quarters'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Earnings Per Share'
                }
            }
        }
  };

  const labels = [
    "Q1-2022",
    "Q2-2022",
    "Q3-2022",
    "Q4-2022", 
    "Q1-2023",
    "Q2-2023",
    "Q3-2023",
    "Q4-2023",
  ];

    
    // Align predictedChartData with the 'Q3-2023' starting point (currently hardcoded)
    const startingPointIndex = labels.indexOf("Q3-2023");
    const extendedPredictedChartData = Array(startingPointIndex).fill(null).concat(predictedChartData);

    const data = {
    labels: labels,
    datasets: [
      {
        label: '[Company Name] Performance',
        data: chartData,
        borderColor: '#0D4EA6',
        backgroundColor: '#0D4EA6',
      },
      {
        label: '[Company Name] Predicted Performance',
        data: extendedPredictedChartData,
        borderColor: '#52A31D',
        backgroundColor: '#52A31D',
        beginAtZero: false,
      },
    ],
  };

  return (
    <div className="container mx-auto shadow-xl h-fit rounded-lg bg-white mt-8 font-medium text-xl center p-5">
        Market Performance
        <div className="container mx-auto h-fit rounded-lg bg-slate-50 mt-8 font-medium p-5"> 
            <Line className="self-center" options={options} data={data} />
        </div> 
    </div>
  );
};

export default MarketPerformance;
