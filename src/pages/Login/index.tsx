import React from 'react';
import style from './login.module.scss';
import { PUBLIC_URL } from '@/utils/const';

const Login = () => {
  return (
    <div className={style['login']}>
      <div className="container">
        <div className={style['login__box']}>
          <div className={style['login__pic']}>
            <img width={265} height={150} src={`${PUBLIC_URL}/assets/images/logo.svg`} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
