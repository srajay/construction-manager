import React from "react";
import { ProgressData } from "./CostData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GraphData = () => {
  return (
    <>
      <Line
        data={{
          labels: ProgressData.map((items) => items.schedule),
          datasets: [
            {
              label: "Accural",
              data: ProgressData.map((items) => items.accural),
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "Cum_accural",
              data: ProgressData.map((items) => items.cum_accural),
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "bottom",
            },
            title: {
              display: true,
              text: "Cost Line Chart",
            },
          },
        }}
      />
    </>
  );
};

export default GraphData;
