import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';
import Login from './pages/Login';
import Home from './layouts/Home';
import { routeList } from './routers/route';
import ProtectedRoute from './routers/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute isAuthenticated={localStorage.getItem('token') ? true : false} fallbackPath="/login">
            <Home />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Navigate to="/report" />} />
        {routeList.map((item) => (
          <Route key={item.path} path={item.path} element={item.component} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
