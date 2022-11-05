import LoginPage from './pages/LoginPage';
import HomePage from './pages/Home';
import RegisterQuery from './pages/RegisterQuery';
import RegisterAddress from './pages/RegisterAddress';
import RegisterUser from './pages/RegisterUser';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';

function App() {
  return (
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/registerAddress" element={<RegisterAddress/>} />
        <Route path="/registerQuery" element={<RegisterQuery/>} />
        <Route path="/registerUser" element={<RegisterUser/>} />
      </Routes>
  );
}

export default App;
