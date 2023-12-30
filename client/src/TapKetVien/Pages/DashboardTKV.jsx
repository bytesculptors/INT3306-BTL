import React from 'react'
import '../Styles/tapketvien.css'
import { Routes, Route, useParams } from 'react-router-dom';
import SideBarTKV from '../Components/SideBar/SideBarTKV';
import UserInforTKV from '../Components/UserInfo/UserInfoTKV';
// import CreatePostTKV from './CreatePost/CreatePostTKV';
// import NewProductTKV from './NewProductTKV/NewProductTKV';
import DeliveredProductTKV from './DeliveredProductTKV/DeliveredProduct';
import NewProductTKV from './NewProductTKV/NewProductTKV';

const DashbroadTKV = () => {
    const {username, locationName} = useParams()
    console.log(username);
    console.log(locationName);
    return (
        <div className='tapketvien-dashboard'>
            <SideBarTKV username={username} locationName={locationName}/>
            <UserInforTKV name={username}/>
            <div style={{ marginLeft: '280px' }}>
                <Routes>
                    <Route path='/new' element={<NewProductTKV senderAddress={locationName}/>} />
                    <Route path='/delivered' element={<DeliveredProductTKV senderAddress={locationName}/>} />
                </Routes>
            </div>
        </div>
    )
}

export default DashbroadTKV