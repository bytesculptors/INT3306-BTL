import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashbroadGDV from './GiaoDichVien/Pages/DashbroadGDV';
import DashbroadTGD from './TruongGiaoDich/Pages/DashbroadTGD'
import LoginPage from './Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        {/* Giao dich vien */}
        <Route path='/giao-dich-vien/:username/:locationName/*' element={<DashbroadGDV />} />
        {/* Trưởng điểm giao dịch */}
        <Route path='/truong-diem-giao-dich/:username/:locationName/*' element={<DashbroadTGD />} />
      </Routes>
    </Router>

  );
}
export default App;
