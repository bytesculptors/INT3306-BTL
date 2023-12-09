import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('giao-dich-vien'); // Set default role
  const navigate = useNavigate()

  const handleLogin = () => {
    // Handle login logic here, e.g., send a request to your authentication server
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Role:', role);
  
    if (role === 'giao-dich-vien') {
      navigate('/giaodichvien');
    } 
    if (role === 'tap-ket-vien') {
      navigate('/tapketvien');
    }
    if (role === 'truong-diem-tap-ket') {
      navigate('/tapketvien');
    }
    if (role === 'truong-diem-giao-dich') {
      navigate('/truongdiemgiaodich')
    }
    if (role === 'giam-doc') {
      navigate('/giamdoc')
    }
    //navigate('/tapketvien')
    alert('Đăng nhập thành công')
    // Add your authentication logic here
  };

  return (
    <div className='login-page'>
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
            <option value="giam-doc">Giám đốc</option>
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
