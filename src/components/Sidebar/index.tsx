import React from 'react';
import style from './sidebar.module.scss';
import { PUBLIC_URL } from '@/utils/const';
import SidebarItem from '../SidebarItem';
import { menu } from '@/routers/route';

const Sidebar = () => {
  return (
    <div className={style['sidebar']}>
      <div className={style['logo']}>
        <img width={230} height={150} src={`${PUBLIC_URL}/assets/images/logo.svg`} alt="" />
      </div>
      <div className={style['menu']}>
        {menu.map((item) => (
          <SidebarItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
