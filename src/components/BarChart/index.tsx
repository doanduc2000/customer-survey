import { ApexOptions } from 'apexcharts';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  const chartOptions: ApexOptions = {};
  const chartSeries = [
    {
      data: [
        {
          x: 'category A',
          y: 10,
        },
        {
          x: 'category B',
          y: 18,
        },
        {
          x: 'category C',
          y: 13,
        },
      ],
    },
  ];
  return (
    <div>
      <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={400} />
    </div>
  );
};

export default BarChart;
