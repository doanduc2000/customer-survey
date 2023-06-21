import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Login from './pages/Login';
import Home from './layouts/Home';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
