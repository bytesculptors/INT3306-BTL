import React from 'react'
import '../Styles/giamdoc.css'
import SideBarLD from '../Components/SideBar/SideBarLD';
import UserInforLD from '../Components/UserInfo/UserInfoLD'
import CreateAccount from './CreateAccount/CreateAccount'
// import ViewStatisticGD from './ViewStatistic/ViewStatisticGD'
import { Routes, Route, useParams } from 'react-router-dom';
// import ViewStatisticProductGD from './viewProduct/ViewStatisticProductGD';

const DashbroadLD = () => {
    const {username} = useParams()
    return (
        <div className='giamdoc-dashboard'>
            <SideBarLD username={username}/>
            <UserInforLD name={username}/>
            <div style={{ marginLeft: '280px' }}>
                <Routes>
                    <Route path='/create' element={<CreateAccount/>}></Route>
                    {/* <Route path='/statistic' element={<ViewStatisticGD />}></Route>
                    <Route path='/statistic2' element={<ViewStatisticProductGD />}></Route> */}
                </Routes>
            </div>
        </div>
    )
}

export default DashbroadLD