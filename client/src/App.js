import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashbroadGDV from './GiaoDichVien/Pages/DashbroadGDV';
import DashbroadTGD from './TruongGiaoDich/Pages/DashbroadTGD'
import DashbroadTKV from './TapKetVien/Pages/DashboardTKV';
import DashbroadTTK from './TruongTapKet/Pages/DashbroadTTK';
import DashbroadLD from './LanhDao/Pages/DashbroadLD';
import LoginPage from './Login/Login';
import Home from './Home/Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Đăng nhập */}
        <Route path='/login' element={<LoginPage />} />
        {/* Giao dich vien */}
        <Route path='/giao-dich-vien/:username/:locationName/*' element={<DashbroadGDV />} />
        {/* Trưởng điểm giao dịch */}
        <Route path='/truong-diem-giao-dich/:username/:locationName/*' element={<DashbroadTGD />} />
        {/* Tập kết viên */}
        <Route path='/tap-ket-vien/:username/:locationName/*' element={<DashbroadTKV />} /> 
        {/* Trưởng điểm tập kết */}
        <Route path='/truong-diem-tap-ket/:username/:locationName/*' element={<DashbroadTTK />} />
        {/* Lãnh đạo */}
        <Route path='/lanh-dao/:username/*' element={<DashbroadLD />} /> 
      </Routes>
    </Router>

  );
}
export default App;
