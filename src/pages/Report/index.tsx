import React from 'react';
import style from './report.module.scss';
import BarChart from '@/components/BarChart';

const Report = () => {
  const numberAllBrand = {
    categories: [
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
    ],
    seriesData: [[30, 40, 25, 30, 40, 25, 30, 40, 25, 30, 40, 25]],
    seriesLabels: ['Toàn thương hiệu'],
    colors: ['#e3c28b'],
  };

  return (
    <div className={style['report']}>
      <div className={style['box']}>
        <div className={style['item']}>
          <BarChart
            categories={numberAllBrand.categories}
            seriesData={numberAllBrand.seriesData}
            seriesLabels={numberAllBrand.seriesLabels}
            colors={numberAllBrand.colors}
          />
        </div>
        <div className={style['item']}>
          <BarChart
            categories={numberAllBrand.categories}
            seriesData={numberAllBrand.seriesData}
            seriesLabels={numberAllBrand.seriesLabels}
            colors={numberAllBrand.colors}
          />
        </div>
      </div>
    </div>
  );
};

export default Report;
