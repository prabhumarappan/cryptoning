import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useParams } from "react-router-dom";

//This file is for bar chart section of the page. It is using chartjs to display
//historical data of selected coin. It accessing data from cryptocompare API
//for past 6 months and displaying it accordingly.

ChartJS.register(CategoryScale, LinearScale, BarElement);
function BarGraph() {
  const [chartInfo, setChartInfo] = useState();
  const { symbol } = useParams();

  useEffect(() => {
    const fetch_api = async () => {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol.toUpperCase()}&tsym=USD&limit=180&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146`
      );

      //fetching API from cryptocompare for 6 months data. The past data range can be changed by
      //changing USD&limit=180. 180 represents number of days here so in order to show data for
      //past 1 month we can use 30 instead of 180.

      const json = await response.json();
      const data = json.Data.Data;
      const times = data.map((obj) => obj.time);
      const prices = data.map((obj) => obj.high);
      setChartInfo({
        times,
        prices,
      });
    };

    //use api to fetch data for bar graph.

    fetch_api();
  }, [symbol]);

  const data = {
    labels: chartInfo?.times,
    datasets: [
      {
        label: "$",
        data: chartInfo?.prices,
        backgroundColor: "red",
        borderColor: "rgba(247,147,26,1)",
        borderJoinStyle: "round",
        borderCapStyle: "round",
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: 0.2,
      },
    ],
  };

  const options = {
    title: {
      display: false,
      text: "Cryptoning",
      fontSize: 35,
    },

    legend: {
      display: false,
    },

    scales: {
      x: {
        display: false,
        gridLines: {},
      },
    },
  };

  return (
    <div className="graph__container">
      <Bar data={data} options={options} />
      <p id="graph__x">
        <span>OCT</span>
        <span>NOV</span>
        <span>DEC</span>
        <span>JAN</span>
        <span>FEB</span>
        <span>MAR</span>
      </p>
    </div>
  );
}

export default BarGraph;
