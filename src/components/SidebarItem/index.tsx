import React, { useState, useEffect } from 'react';
import style from './sidebarItem.module.scss';
import { Menu } from '@/models/route';
import { Link, useLocation } from 'react-router-dom';

const SidebarItem = ({ name, path, dropdown }: Menu) => {
  const location = useLocation();
  const [isDropdown, setIsDropdown] = useState<Boolean>(false);
  const handleIsDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  const activeMenu = (path: string) => {
    if (path.split('/')[1] === location.pathname.split('/')[1]) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    if (path.split('/')[1] === location.pathname.split('/')[1] && location.pathname.split('/')[2]) {
      setIsDropdown(true);
    }
    if (path.split('/')[1] !== location.pathname.split('/')[1]) {
      setIsDropdown(false);
    }
  }, [path, location]);
  return (
    <div className={activeMenu(path) ? `${style['sidebarItem']} + ${style['active']}` : style['sidebarItem']}>
      <Link to={path} onClick={handleIsDropdown}>
        {dropdown.length === 0 ? <span>{name}</span> : <span className={style['dropDownIcon']}>{name}</span>}
      </Link>
      {isDropdown && dropdown.length !== 0 && (
        <ul>
          {dropdown.map((item) => (
            <li className={item.path === location.pathname ? style['dropActive'] : ''} key={item.path}>
              <Link to={item.path}>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarItem;
