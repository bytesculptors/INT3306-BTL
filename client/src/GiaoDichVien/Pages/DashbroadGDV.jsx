import React from 'react'
import '../Style/Giaodichvien.css'
import SideBarGDV from '../Components/SideBar/SideBarGDV';
import UserInfoGDV from '../Components/UserInfo/UserInfoGDV'
import CreatePostGDV from '../Pages/CreatePost/CreatePostGDV'
import ViewStatisticGDV from '../Pages/ViewStatistic/ViewStatisticGDV'
import { Routes, Route, useParams } from 'react-router-dom';

const DashbroadGDV = () => {
    const {username, locationName} = useParams()
    console.log(username);
    console.log(locationName);
    return (
        <div className='giaodichvien-dashboard'>
            <SideBarGDV username={username} locationName={locationName}/>
            <UserInfoGDV name={username}/>
            <div style={{ marginLeft: '280px' }}>
                <Routes>
                    <Route path='/create' element={<CreatePostGDV senderAddress={locationName}/>}></Route>
                    <Route path='/statistic' element={<ViewStatisticGDV senderAddress={locationName} />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default DashbroadGDV
