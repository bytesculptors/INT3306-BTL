import React from 'react'
import '../Style/truongdiemtapket.css'
import { Routes, Route } from 'react-router-dom';
import CreatePostTDTK from './CreatePost/CreatePostTDTK';
import ViewStatisticTDTK from './ViewStatistic/ViewStatisticTDTK';
import ViewStatisticProductTDTK from './viewProduct/ViewStatisticProductTDTK';
import SideBarTDTK from '../Components/SideBar/SideBarTDTK';
import UserInforTDTK from '../Components/UserInfo/UserInfoTDTK';

const DashbroadTDTK = () => {
    return (
        <div className='truongdiemtapket-dashboard'>
            <SideBarTDTK/>
            <UserInforTDTK/>
            <div style={{ marginLeft: '280px' }}>
                <Routes>
                    <Route path='/create' element={<CreatePostTDTK />}></Route>
                    <Route path='/statistic' element={<ViewStatisticTDTK />}></Route>
                    <Route path='/statistic2' element={<ViewStatisticProductTDTK />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default DashbroadTDTK
