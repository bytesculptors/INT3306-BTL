import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashbroadGDV from './GiaoDichVien/Pages/DashbroadGDV';
import DashbroadGD from './GiamDoc/Pages/DashbroadGD';
import LoginPage from './Login/Login';
import Home from './Home0/Pages/home';
import DashbroadTDGD from './TruongDiemGiaoDich/Pages/DashbroadTDGD';
import DashbroadTDTK from './TruongDiemTapKet/Pages/DashbroadTDTK';
import DashbroadTKV from './TapKetVien/Pages/DashbroadTKV';

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
        <Route path='/tapketvien/*' element={<DashbroadTKV />} /> 
        <Route path='/giamdoc/*' element={<DashbroadGD />} /> 
        <Route path='/truongdiemgiaodich/*' element={<DashbroadTDGD />} /> 
        <Route path='/truongdiemtapket/*' element={<DashbroadTDTK />} /> 

      </Routes>
    </Router>

  );
}

export default App;
