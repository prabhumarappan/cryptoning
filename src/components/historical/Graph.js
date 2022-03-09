import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

export function Graph() {
  const [chartInfo, setChartInfo] = useState();
  const { symbol } = useParams();
  
  const fetch_api = async () => {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol.toUpperCase()}&tsym=USD&limit=180&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146`
    );
    const json = await response.json();
    const data = json.Data.Data;
    const times = data.map((obj) => obj.time);
    const prices = data.map((obj) => obj.high);
    setChartInfo({
      times,
      prices,
    });
  };

  useEffect(() => {
    fetch_api();
  }, []);

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
      display: true,
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
      <Line data={data} options={options} />
      <p id='graph__x'>
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

