import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css'
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('giao-dich-vien'); // Set default role
  const [location, setLocation] = useState('Hà Nội');
  const navigate = useNavigate()

  const handleLogin = async () => {
    const response = await axios.post('http://localhost:3001/api/login/auth', {
      username,
      password,
      role,
      location
    });
    if (response.data.success) {
      if (role !== 'lanh-dao') {
        navigate(`/${role}/${username}/${location}`)
        alert('Đăng nhập thành công')
      } else {
        navigate(`/${role}/${username}`)
        alert('Đăng nhập thành công')
      }
    } else {
      alert('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập.');
    }
    // Add your authentication logic here
    // navigate(`/${role}/${username}/${location}`)
    // alert('Đăng nhập thành công')
  };

  return (
    <div className='login-container'>
    <div className='login-page'>
      <img src={process.env.PUBLIC_URL + '/avatar.png'} alt="Avatar" className="avatar3" />
      <h2 className='login-header'>Login</h2>
      <form className='login-form'>
        <div className="form-field">
          <label className='login-label'>Username:</label>
          <input className='login-input'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label className='login-label'>Password:</label>
          <input className='login-input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label className='login-label'>Role:</label>
          <select className='login-select' value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="giao-dich-vien">Giao Dịch Viên</option>
            <option value="tap-ket-vien">Tập Kết Viên</option>
            <option value="truong-diem-tap-ket">Trưởng Điểm Tập Kết</option>
            <option value="truong-diem-giao-dich">Trưởng Điểm Giao Dịch</option>
            <option value="lanh-dao">Lãnh đạo công ty</option>
          </select>
        </div>
        <div className="form-field">
          <label className='login-label'>Địa điểm:</label>
          <select className='login-select' value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Quảng Ninh">Quảng Ninh</option>
            <option value="Nghệ An">Nghệ An</option>
            <option value="Quảng Bình">Quảng Bình</option>
            <option value="Thành phố Hồ Chí Minh">Thành phố Hồ Chí Minh</option>
            <option value="Long An">Long An</option>
            <option value="Miền Bắc">Miền Bắc</option>
            <option value="Miền Trung">Miền Trung</option>
            <option value="Miền Nam">Miền Nam</option>
          </select>
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;

