import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashbroadGDV from './GiaoDichVien/Pages/DashbroadGDV';
import LoginPage from './Login/Login';

function App() {
  return (
    // <LoginPage />
    // <DashbroadGDV/>
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        {/* Giao dich vien */}
        <Route path='/giaodichvien/*' element={<DashbroadGDV />} />
      </Routes>
    </Router>

  );
}

export default App;
