import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashbroadGDV from './GiaoDichVien/Pages/DashbroadGDV';
import LoginPage from './Login/Login';
import Home from './Home0/Pages/home';

function App() {
  return (
    // <LoginPage />
    // <DashbroadGDV/>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Giao dich vien */}
        <Route path='/LoginPage/*' element={<LoginPage />} />
        <Route path='/giaodichvien/*' element={<DashbroadGDV />} />
        <Route path='/tapketvien/*' element={<DashbroadGDV />} /> 
      </Routes>
    </Router>

  );
}

export default App;
