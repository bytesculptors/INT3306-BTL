import React from 'react';
import '../../App.css';
import PersonIcon from '@mui/icons-material/Person';

const UserInfor = () => {
    return (
        <div className="user-info">
            <div className='user-icon'>
                <PersonIcon />
            </div>
            <div className="username">
                <p>Nguyễn Văn B</p>
            </div>
            <button className="logout-button">Đăng xuất</button>
        </div>
    );
};

export default UserInfor;
