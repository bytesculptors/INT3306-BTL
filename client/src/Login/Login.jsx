import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('giao-dich-vien'); // Set default role
  const [location, setLocation] = useState('Hà Nội');
  const navigate = useNavigate()

  const handleLogin = () => {
    // Handle login logic here, e.g., send a request to your authentication server
    // console.log('Username:', username);
    // console.log('Password:', password);
    // console.log('Role:', role);
    navigate(`/giaodichvien/${username}/${location}`)
    alert('Đăng nhập thành công')
    // Add your authentication logic here
  };

  return (
    <div className='login-page'>
      <h2>Login</h2>
      <form className='login-form'>
        <div>
          <label className='login-label'>Username:</label>
          <input className='login-input'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className='login-label'>Password:</label>
          <input className='login-input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label className='login-label'>Role:</label>
          <select className='login-select' value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="giao-dich-vien">Giao Dịch Viên</option>
            <option value="tap-ket-vien">Tập Kết Viên</option>
            <option value="truong-diem-tap-ket">Trưởng Điểm Tập Kết</option>
            <option value="truong-diem-giao-dich">Trưởng Điểm Giao Dịch</option>
          </select>
        </div>
        <div>
          <label className='login-label'>Địa điểm:</label>
          <select className='login-select' value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Quảng Ninh">Quảng Ninh</option>
            <option value="Nghệ An">Nghệ An</option>
            <option value="Quảng Bình">Quảng Bình</option>
            <option value="Thành phố Hồ Chí Minh">Thành phố Hồ Chí Minh</option>
            <option value="Long An">Long An</option>
          </select>
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
