import { ApexOptions } from 'apexcharts';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
interface StackedChartProps {
  categories: string[];
  seriesData: number[][];
  seriesLabels: string[];
  colors: string[];
}
const BarChart = ({ categories, seriesData, seriesLabels, colors }: StackedChartProps) => {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: 'top',
          total: {
            enabled: true,
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: categories,
    },
    series: seriesData.map((data, index) => ({
      name: seriesLabels[index],
      data: data,
    })),
    legend: {
      position: 'top',
    },
    colors: colors,
  };

  return <ReactApexChart options={chartOptions} series={chartOptions.series} type="bar" height={300} />;
};

export default BarChart;
