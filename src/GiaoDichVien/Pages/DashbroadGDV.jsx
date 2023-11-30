import React from 'react'
import '../Style/Giaodichvien.css'
import SideBarGDV from '../Components/SideBar/SideBarGDV';
import UserInfoGDV from '../Components/UserInfo/UserInfoGDV'
import CreatePostGDV from '../Pages/CreatePost/CreatePostGDV'
import ViewStatisticGDV from '../Pages/ViewStatistic/ViewStatisticGDV'
import { Routes, Route } from 'react-router-dom';

const DashbroadGDV = () => {
    return (
        <div className='giaodichvien-dashboard'>
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

export default DashbroadGDV
