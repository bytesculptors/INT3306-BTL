import React from 'react'
import '../Style/giamdoc.css'
import SideBarGD from '../Components/SideBar/SideBarGD';
import UserInfoGD from '../Components/UserInfo/UserInfoGD'
import CreatePostGD from './CreatePost/CreatePostGD'
import ViewStatisticGD from './ViewStatistic/ViewStatisticGD'
import { Routes, Route } from 'react-router-dom';
import ViewStatisticProductGD from './viewProduct/ViewStatisticProductGD';

const DashbroadGD = () => {
    return (
        <div className='giamdoc-dashboard'>
            <SideBarGD/>
            <UserInfoGD/>
            <div style={{ marginLeft: '280px' }}>
                <Routes>
                    <Route path='/create' element={<CreatePostGD />}></Route>
                    <Route path='/statistic' element={<ViewStatisticGD />}></Route>
                    <Route path='/statistic2' element={<ViewStatisticProductGD />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default DashbroadGD
