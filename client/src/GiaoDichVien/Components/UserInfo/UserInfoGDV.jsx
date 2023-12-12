import React from 'react';
import '../../../App.css';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";

const UserInforGDV = (props) => {
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/')
    }
    return (
        <div className="user-info">
            <div className='user-icon'>
                <PersonIcon />
            </div>
            <div className="username">
                <p>{props.name}</p>
            </div>
            <button className="logout-button" onClick={handleSubmit}>Đăng xuất</button>
        </div>
    );
};

export default UserInforGDV;
