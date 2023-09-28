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
    <div className="w-full h-full flex flex-col align-center">
      {/* Sorting Options */}
      <div className="ml-5 my-4 flex align-center justify-between pr-3 h-[80px]">
        <div>
          <label for="hs-select-label" class="block text-sm font-medium mb-2 dark:text-white">Sort by Time</label>
          <select id="hs-select-label" class="py-3 px-4 pr-9 block w-fit border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" value={sortingOption}
            onChange={(e) => handleSortingChange(e.target.value)}>
            <option selected>Daily</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
            <option value="week">Week</option>
          </select>
        </div>
        <div>
          <label for="hs-select-label" class="block text-sm font-medium mb-2 dark:text-white">Sort by Breed</label>
          <select id="hs-select-label" class="py-3 px-4 pr-9 block w-fit border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" value={sortingOption}
            onChange={(e) => handleSortingChange(e.target.value)}>
            <option selected>All</option>
            <option value="month">Patanwadi</option>
            <option value="year">Panchali</option>
            <option value="week">Marwadi</option>
          </select>
        </div>
        <div>
          <label for="hs-select-label" class="block text-sm font-medium mb-2 dark:text-white">Sort by Color</label>
          <select id="hs-select-label" class="py-3 px-4 pr-9 block w-fit border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" value={sortingOption}
            onChange={(e) => handleSortingChange(e.target.value)}>
            <option selected>All</option>
            <option value="month">Yello</option>
            <option value="year">White</option>
            <option value="week">Black</option>
          </select>
        </div>
        <div>
          <label for="priceRange" class="block text-sm font-medium mb-2 dark:text-white">Price Range</label>
          <input
            type="range"
            id="priceRange"
            name="priceRange"
            class="w-full h-4 bg-gray-200 rounded-md appearance-none slider-thumb:active:bg-primary"
            min="0"
            max="100"
            step="1"
          />
          <div class="flex justify-between">
            <span class="text-sm text-secondary">0</span>
            <span class="text-sm text-secondary">100</span>
          </div>
        </div>
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
