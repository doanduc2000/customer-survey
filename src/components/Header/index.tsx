import React from 'react';
import style from './header.module.scss';

const Header = () => {
  const name: string = 'Đoàn Minh Đức';
  const nameArr = name.split('');

  return (
    <div className={style['header']}>
      <div className="container">
        <div className={style['box']}>
          <div className={style['title']}>Trang chủ</div>
          <div className={style['user']}>
            <div className={style['icon']}>{nameArr[0]}</div>
            <div className={style['info']}>
              <div className={style['name']}>{name}</div>
              <div className={style['role']}>Admin</div>
            </div>

            <div className={style['dropdown']}>
              <ul>
                <li className={style['logout']}>Đăng xuất</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
