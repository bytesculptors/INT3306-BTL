import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import '../Styles/Home.css'

const Home = () => {
    const [matracuu, setMatracuu] = useState('');
    const [userList, setUserList] = useState([])

    const navigate = useNavigate();


    const handleLogin = () => {
        // Add your logout logic here
        console.log('Login button clicked');
        // Perform any necessary logout actions, such as clearing user session or redirecting to the login page
        navigate('/login');
    };
    const handleFind = (id) => {
        console.log('find button clicked');
        axios.get(`http://localhost:3001/api/get/transaction/${id}`).then((response) => {
            setUserList(response.data)
            console.log(response.data);
        })
        // console.log(userList);
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
                    <input className='find'
                        type="text"
                        value={matracuu}
                        onChange={(e) => setMatracuu(e.target.value)}
                    />
                    <button className="button_find" onClick={() => { handleFind(matracuu) }}>Tra cứu</button>
                </div>

                {/* <div className='search'>
                    <ul>
                        {userList.map((transactions) => (
                            <li key={transactions.TransactionID}>{transactions.TransactionID}</li>
                        ))}
                    </ul>
                </div> */}
            </div>

            <div className="middle">
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Mã giao dịch</th>
                            <th>Mã số người gửi</th>
                            <th>Mã số người nhận</th>
                            <th>Ngày gửi</th>
                            <th>Trạng thái hàng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((item) => {
                            return <tr>
                                <td>{item.TransactionID}</td>
                                <td>{item.SenderUserID}</td>
                                <td>{item.ReceiverUserID}</td>
                                <td>{item.SentDate}</td>
                                <td>{item.Status}</td>
                            </tr>
                        })}

                    </tbody>
                </Table>
            </div>


            <div className='foot'>
                <img src={process.env.PUBLIC_URL + '/pic1.png'} alt="pic1" className="pic1" />
                <img src={process.env.PUBLIC_URL + '/pic2.png'} alt="pic2" className="pic2" />
            </div>

        </div>
    );
};

export default Home;
