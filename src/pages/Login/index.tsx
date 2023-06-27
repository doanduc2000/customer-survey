import React, { useEffect, useState } from 'react';
import style from './login.module.scss';
import { PUBLIC_URL } from '@/utils/const';
import useLocalStorage from '@/hook/useLocalStorage';
import { useNavigate } from 'react-router-dom';
interface UserState {
  phone: string;
  password: string;
}
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserState>({ phone: '', password: '' });
  const [error, setError] = useState<string>('');
  const [token, setToken] = useLocalStorage<string>('token', '');
  const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    if (user.phone === '' || user.password === '') {
      setError('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    if (user.phone !== 'admin' || user.password !== 'admin') {
      setError('Số điện thoại hoặc mật khẩu không đúng');
      return;
    }
    setToken('tolen123');
    setError('');
    return;
  };
  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [navigate, token, setToken]);
  return (
    <div className={style['login']}>
      <div className="container">
        <div className={style['login__box']}>
          <div className={style['login__pic']}>
            <img width={265} height={150} src={`${PUBLIC_URL}/assets/images/logo.svg`} alt="" />
          </div>
          <div className={style['login__detail']}>
            <div className={style['login__form']}>
              <div className={style['login__title']}>Đăng nhập</div>
              <div className={style['login__input']}>
                <label htmlFor="phone">Số điện thoại: </label>
                <input type="text" id="phone" name="phone" onChange={handleUser} value={user.phone} required />
              </div>
              <div className={style['login__input']}>
                <label htmlFor="password">Mật khẩu: </label>
                <input type="text" id="password" name="password" onChange={handleUser} value={user.password} required />
              </div>
              <div className={style['login__button']}>
                <button onClick={handleLogin}>Đăng nhập</button>
              </div>
            </div>
            {error && <p>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
