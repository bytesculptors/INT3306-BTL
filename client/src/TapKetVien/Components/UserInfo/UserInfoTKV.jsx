import React from 'react';
import '../../../App.css';
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

const UserInforTKV = (props) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Add your logout logic here
        console.log('Logout button clicked');
        // Perform any necessary logout actions, such as clearing user session or redirecting to the login page
        navigate('/');
      };
    return (
        <div className="user-info">
            <div className='user-icon'>
                <PersonIcon />
            </div>
            <div className="username">
                <p>{props.name}</p>
            </div>
            <button className="logout-button" onClick={handleLogout}>Đăng xuất</button>
        </div>
    );
};

export default UserInforTKV;