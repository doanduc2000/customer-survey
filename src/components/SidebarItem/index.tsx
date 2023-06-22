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
  }, [path, location]);
  return (
    <div className={activeMenu(path) ? `${style['sidebarItem']} + ${style['active']}` : style['sidebarItem']}>
      <Link to={path} onClick={handleIsDropdown}>
        {name}
      </Link>
      {isDropdown && dropdown.length !== 0 && (
        <ul>
          {dropdown.map((item) => (
            <li className={item.path === location.pathname ? style['active'] : ''} key={item.path}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarItem;
