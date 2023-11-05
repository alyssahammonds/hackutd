"use client"; // for development only

import React, { useEffect, useState } from 'react';
import { Chart, CategoryScale, Colors } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale);
Chart.register(Colors);

function calculateNext(prev: number, reprev: number) {
    return (prev) + (prev - reprev);
}

const MarketPerformance: React.FC = () => {
  const [chartData, setChartData] = useState<number[]>([]);
  useEffect(() => {
    const randomData = [26.29, 1.36, 1.40, 1.53, 1.23, 1.21, 1.06]//Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
    setChartData(randomData);
  }, []);

  const [predictedChartData, setPredictedChartData] = useState<number[]>([]);
    useEffect(() => {
    const randomData = [1.06, calculateNext(1.06, 1.21)]; //Array.from({ length: 2 }, () => Math.floor(Math.random() * 100));
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

    // make an array of comapny names
    const companyNames = ["Apple", "Google", "Microsoft", "Amazon", "Facebook", "Tesla", "Netflix", "Goldman Sachs", "JP Morgan", "IBM", "Intel", "Cisco", "Oracle", "Adobe", "PayPal", "Visa", "Mastercard", "Salesforce", "Starbucks", "McDonalds", "Walmart", "Target", "Home Depot", "Costco", "Nike", "Coca-Cola", "Pepsi", "Disney", "Exxon Mobil", "Chevron", "Verizon", "AT&T", "Boeing", "Lockheed Martin", "SpaceX", "Nvidia", "AMD", "UPS", "FedEx", "American Airlines", "Delta Airlines", "Southwest Airlines", "United Airlines", "General Motors", "Ford", "General Electric", "IBM", "HP", "Dell", "T-Mobile", "Qualcomm", "Nokia", "Sony", "Nintendo", "Spotify", "Uber", "Lyft", "Airbnb", "DoorDash", "Robinhood", "Coinbase", "Zoom", "TikTok", "Reddit", "Snapchat", "Twitter", "Pinterest", "Twitch", "Tinder", "Etsy", "Shopify", "Ebay", "PayPal", "Venmo"];
    //grab a random company name
    const randomCompanyName = "Google";//companyNames[Math.floor(Math.random() * companyNames.length)];   


    const data = {
    labels: labels,
    datasets: [
      {
        label: randomCompanyName + ' Performance',
        data: chartData,
        borderColor: '#0D4EA6',
        backgroundColor: '#0D4EA6',
      },
      {
        label: randomCompanyName + ' Predicted Performance',
        data: extendedPredictedChartData,
        borderColor: '#52A31D',
        backgroundColor: '#52A31D',
        beginAtZero: false,
      },
    ],
  };

  return (
    <div className='h-screen'>
    <h1 className='text-6xl font-bold text-center text-[#3E5463] drop-shadow-lg'>Market Performance</h1>
    <div className="container mx-auto shadow-xl h-fit rounded-lg bg-white mt-8 font-medium text-xl center p-5">
        {/* Select a company to view its performance and predicted performance. */}
        <div className="container mx-auto h-fit rounded-lg bg-slate-50 mt-8 font-medium p-5"> 
            <Line className="self-center" options={options} data={data} />
        </div>  
    </div>
    </div>
  );
};

export default MarketPerformance;
