import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './home.module.scss';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const Home = () => {
  return (
    <div className={style['home']}>
      <Sidebar />
      <div className={style['right']}>
        <Header />
        <div className={style['main']}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
