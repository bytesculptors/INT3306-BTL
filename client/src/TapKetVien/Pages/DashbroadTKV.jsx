import React from 'react'
import '../Style/tapketvien.css'
import { Routes, Route } from 'react-router-dom';
import SideBarTKV from '../Components/SideBar/SideBarTKV';
import UserInforTKV from '../Components/UserInfo/UserInfoTKV';
import CreatePostTKV from './CreatePost/CreatePostTKV';
import ViewStatisticTKV from './ViewStatistic/ViewStatisticTKV';

const DashbroadTKV = () => {
    return (
        <div className='tapketvien-dashboard'>
            <SideBarTKV/>
            <UserInforTKV/>
            <div style={{ marginLeft: '280px' }}>
                <Routes>
                    <Route path='/create' element={<CreatePostTKV />}></Route>
                    <Route path='/statistic' element={<ViewStatisticTKV />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default DashbroadTKV
