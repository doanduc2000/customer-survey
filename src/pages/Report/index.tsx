import React from 'react';
import style from './report.module.scss';
import BarChart from '@/components/BarChart';

const Report = () => {
  const categories = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ];
  const seriesData = [
    [30, 40, 25, 30, 40, 25, 30, 40, 25, 30, 40, 25],
    [20, 35, 45, 20, 35, 45, 20, 35, 45, 20, 35, 45],
    [15, 30, 40, 20, 35, 45, 20, 35, 45, 20, 35, 45],
    [20, 35, 45, 20, 35, 45, 20, 35, 45, 20, 35, 45],
  ];
  const seriesLabels = ['Kangnam', 'Paris', 'Hồng Hà', 'Đông Á'];
  const colors = ['#febc3b', '#26a0fc', '#ff6178', '#26e7a6'];
  return (
    <div className={style['report']}>
      <div className={style['box']}>
        <div className={style['item']}>
          <BarChart categories={categories} seriesData={seriesData} seriesLabels={seriesLabels} colors={colors} />
        </div>
        <div className={style['item']}>
          <BarChart categories={categories} seriesData={seriesData} seriesLabels={seriesLabels} colors={colors} />
        </div>
      </div>
    </div>
  );
};

export default Report;
