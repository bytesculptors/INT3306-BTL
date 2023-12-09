import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../Style/home.css'

const Home = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [matracuu, setFind] = useState('');
    const navigate = useNavigate();
    const handleLogout = () => {
        // Add your logout logic here
        console.log('Login button clicked');
        // Perform any necessary logout actions, such as clearing user session or redirecting to the login page
        navigate('/LoginPage');
      };
    return (
        <div className="home-0">
            <div className='head'>
                <img src={process.env.PUBLIC_URL + '/avatar.png'} alt="Avatar" className="avatar1" />
                <div className='home_title'>Magic Post</div>
                <ul className="menu">
                    <li><a href='http://localhost:3000/'>Về chúng tôi</a></li>
                    <li><a href='http://localhost:3000/'>Dịch vụ</a></li>
                    <li><a href='http://localhost:3000/'>Bảng giá</a></li>
                </ul>
                <button type="button_login" onClick={handleLogout}>Đăng nhập</button>
            </div>

            <div className='body'>
                <div className='tracuu'>
                    <button type="button_find" onClick={handleLogout}>tra cứu</button>
                    <input className='find'
                        type="text"
                        value={matracuu}
                        onChange={(e) => setFind(e.target.value)}
                    />
                </div>
            </div>

            <div className='foot'>
                <img src={process.env.PUBLIC_URL + '/pic1.png'} alt="pic1" className="pic1" />
                <img src={process.env.PUBLIC_URL + '/pic2.png'} alt="pic2" className="pic2" />
            </div>
        </div>
  );
};

export default Home;

