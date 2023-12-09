import React from 'react'
import '../Style/Giaodichvien.css'
import SideBarGDV from '../Components/SideBar/SideBarGDV';
import UserInfoGDV from '../Components/UserInfo/UserInfoGDV'
import CreatePostGDV from './CreatePost/CreatePostGDV'
import ViewStatisticGDV from './ViewStatistic/ViewStatisticGDV'
import { Routes, Route } from 'react-router-dom';

const DashbroadTKV = () => {
    return (
        <div className='tapketvien-dashboard'>
            <SideBarGDV/>
            <UserInfoGDV/>
            <div style={{ marginLeft: '280px' }}>
                <Routes>
                    <Route path='/create' element={<CreatePostGDV />}></Route>
                    <Route path='/statistic' element={<ViewStatisticGDV />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default DashbroadTKV
