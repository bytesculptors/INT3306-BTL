import React from 'react'
import '../Style/truongdiemgiaodich.css'
import { Routes, Route } from 'react-router-dom';
import CreatePostTDGD from './CreatePost/CreatePostTDGD';
import ViewStatisticTDGD from './ViewStatistic/ViewStatisticTDGD';
import ViewStatisticProductTDGD from './viewProduct/ViewStatisticProductTDGD';
import UserInforTDGD from '../Components/UserInfo/UserInfoTDGD';
import SideBarTDGD from '../Components/SideBar/SideBarTDGD';

const DashbroadTDGD = () => {
    return (
        <div className='truongdiemgiaodich-dashboard'>
            <SideBarTDGD/>
            <UserInforTDGD/>
            <div style={{ marginLeft: '280px' }}>
                <Routes>
                    <Route path='/create' element={<CreatePostTDGD />}></Route>
                    <Route path='/statistic' element={<ViewStatisticTDGD />}></Route>
                    <Route path='/statistic2' element={<ViewStatisticProductTDGD />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default DashbroadTDGD
