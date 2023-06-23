import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';
import Login from './pages/Login';
import Home from './layouts/Home';
import { routeList } from './routers/route';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />}>
        {routeList.map((item) => (
          <Route key={item.path} path={item.path} element={item.component} />
        ))}
        <Route path="/" element={<Navigate to="/report" />} />
      </Route>
    </Routes>
  );
}

export default App;
