"use client";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { faker } from '@faker-js/faker';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"; // Import individual components

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend); // Register the components

const options = {
  responsive: true,
  scales: {
    x: {
      type: 'category', // Specify the scale type as 'category'
    },
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const LineChart = () => {
  const [sortingOption, setSortingOption] = useState("month");
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Create or update the chart data based on the selected sorting option
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const newData = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };

    // Implement sorting logic here based on the sortingOption
    if (sortingOption === "month") {
      // Sort data by month
      // Modify the newData accordingly
    } else if (sortingOption === "year") {
      // Sort data by year
      // Modify the newData accordingly
    } else if (sortingOption === "week") {
      // Sort data by week
      // Modify the newData accordingly
    }

    setChartData(newData);
  }, [sortingOption]);

  const handleSortingChange = (option) => {
    setSortingOption(option);
  };

  return (
    <div>
      {/* Sorting Options */}
      <div className="ml-5 my-4">
        <label className="mr-2">Sort by:</label>
        <select
          className="border rounded-md py-1 px-2"
          value={sortingOption}
          onChange={(e) => handleSortingChange(e.target.value)}
        >
          <option value="month">Month</option>
          <option value="year">Year</option>
          <option value="week">Week</option>
        </select>
      </div>

      {/* Line Chart */}
      {chartData && (
        <div>
          {/* Use the updated options variable here */}
          <Line data={chartData} options={options} />
        </div>
      )}
    </div>
  );
};

export default LineChart;
