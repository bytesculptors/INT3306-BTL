import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../Style/home.css'

const Home = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [matracuu, setFind] = useState('');
    const [userList, setUserList] = useState([])

    const navigate = useNavigate();
    
    
    const handleLogin = () => {
        // Add your logout logic here
        console.log('Login button clicked');
        // Perform any necessary logout actions, such as clearing user session or redirecting to the login page
        navigate('/LoginPage');
      };
    const handleFind = async () => {
        console.log('find button clicked');
        // Perform any necessary logout actions, such as clearing user session or redirecting to the login page
        try {
            const response = await axios.get(`http://localhost:3002/api/getHome?keyword=${matracuu}`);
            setUserList(response.data);
        } catch (error) {
            console.error('Lỗi khi tìm kiếm: ' + error);
        }
    };
    return (
        <div className="home-0">
            <div className='head'>
                <img src={process.env.PUBLIC_URL + '/avatar.png'} alt="Avatar" className="avatar1" />
                <div className='home_title'>Magic Post</div>
                <ul className="menu">
                    <li><a href='/về chúng tôi.png'>Về chúng tôi</a></li>
                    <li><a href='/dịch vụ.pdf'>Dịch vụ</a></li>
                    <li><a href='/bảng giá.png'>Bảng giá</a></li>
                </ul>
                <button className="button_login" onClick={handleLogin}>Đăng nhập</button>
            </div>

            <div className='body'>
                <div className='tracuu'>
                    <button className="button_find" onClick={handleFind}>tra cứu</button>
                    <input className='find'
                        type="text"
                        value={matracuu}
                        onChange={(e) => setFind(e.target.value)}
                    />
                    
                </div>

                <div>
                    <ul>
                        {userList.map((users) => (
                            <li key={users.UserID}>{users.UserName}</li>
                        ))}
                    </ul>
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

