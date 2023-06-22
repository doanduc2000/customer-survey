import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Login from './pages/Login';
import Home from './layouts/Home';
import { route } from './routers/route';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />}>
        {route.map((item) => (
          <Route key={item.path} path={item.path} element={item.component}>
            {item.dropdown.length !== 0 &&
              item.dropdown.map((item) => <Route key={item.path} path={item.path} element={item.component} />)}
          </Route>
        ))}
      </Route>
    </Routes>
  );
}

export default App;
