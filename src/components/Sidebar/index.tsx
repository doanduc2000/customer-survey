import React from 'react';
import style from './sidebar.module.scss';
import { PUBLIC_URL } from '@/utils/const';

const Sidebar = () => {
  return (
    <div className={style['sidebar']}>
      <div className={style['logo']}>
        <img width={230} height={150} src={`${PUBLIC_URL}/assets/images/logo.svg`} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
