import React from 'react';
import style from './header.module.scss';
import { PUBLIC_URL } from '@/utils/const';

const Header = () => {
  return (
    <div className={style['header']}>
      <div className="container">
        <div className={style['box']}>
          <div className={style['title']}>Trang chủ</div>
          <div className={style['user']}>
            <div className={style['icon']}>
              <img width={30} height={30} src={`${PUBLIC_URL}/assets/icons/user-icon.svg`} alt="" />
            </div>
            <span>Đoàn Minh Đức</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
