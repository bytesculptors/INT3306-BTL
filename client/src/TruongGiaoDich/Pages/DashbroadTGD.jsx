import React from 'react'
import '../Style/TruongDiemGiaodich.css'
import SideBarTGD from '../Components/SideBar/SideBarTGD';
import UserInfoTGD from '../Components/UserInfo/UserInfoTGD'
import CreateAccTGD from './CreateAccount/CreateAccTGD'
import ViewStatisticTGD from './ViewStatistic/ViewStatisticTGD'
import { Routes, Route, useParams } from 'react-router-dom';

const DashbroadTGD = () => {
    const {username, locationName} = useParams()
    console.log(username);
    console.log(locationName);
    return (
        <div className='giaodichvien-dashboard'>
            <SideBarTGD username={username} locationName={locationName}/>
            <UserInfoTGD name={username}/>
            <div style={{ marginLeft: '280px' }}>
                <Routes>
                    <Route path='/create' element={<CreateAccTGD senderAddress={locationName}/>}></Route>
                    <Route path='/statistic' element={<ViewStatisticTGD senderAddress={locationName} />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default DashbroadTGD
