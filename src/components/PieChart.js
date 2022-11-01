

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

//defaults.global.tooltips.enabled = false
//defaults.global.legend.position = 'bottom'

const PieChart = ({ income, expense }) => {
  const labels = ["Expenses", "Balance", "Incomes"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: [expense, income - expense, income],
        backgroundColor: [
          "	navy",
          "	rgb(216,191,216)",
          "rgb(176,224,230)",
        ],
        borderColor: [
          "	rgb(169,169,169)",
          "	rgb(135,206,235)",
          "rgb(51,51,0)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
