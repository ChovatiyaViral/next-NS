import React, { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import { useSelector } from "react-redux";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = ({ RadarChartData, colorDetails }) => {
  const data = {
    labels: RadarChartData?.map(item => {
      return item.flavour.name.split("/").map((item, index, arr) => {
        if (index + 1 !== arr.length) {
          return item + "/"
        } else {
          return item
        }
      });
    }),
    datasets: [
      {
        label: [],
        data: RadarChartData?.map(item => item.value),
        backgroundColor: colorDetails.radarChartColor,
        borderColor: `${colorDetails.radarChartBorderColor}`,
        borderWidth: 1
      },
    ],
  }

  const chartRef = React.createRef();

  const radarOptions = {
    startAngle: 0,
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        ticks: {
          display: false,
          tickLength: 8,
        },
        pointLabels: {
          color: colorDetails.textColor,
          fontWidth: "600",
          font: {
            size: 18,
          },
          fontFamily: "Montserrat",
        },
        grid: {
          circular: true,
          color: "#fff",
        },
        anglelines: {
          display: false,
          // lin
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Radar ref={chartRef} data={data} redraw={true} options={radarOptions} />
    </>
  );
};

export default RadarChart;
