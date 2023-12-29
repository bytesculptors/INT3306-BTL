import React from 'react'
import '../Styles/truongdiemtapket.css'
import { Routes, Route, useParams } from 'react-router-dom';
import CreateAccTKV from './CreateAccount/CreateAccount';
// import ViewStatisticTDTK from './ViewStatistic/ViewStatisticTDTK';
// import ViewStatisticProductTDTK from './viewProduct/ViewStatisticProductTDTK';
import SideBarTTK from '../Components/SideBar/SideBarTTK';
import UserInforTTK from '../Components/UserInfor/UserInforTTK';

const DashbroadTTK = () => {
    const {username, locationName} = useParams()
    return (
        <div className='truongdiemtapket-dashboard'>
            <SideBarTTK username={username} locationName={locationName}/>
            <UserInforTTK name={username}/>
            <div style={{ marginLeft: '280px' }}>
                <Routes>
                    <Route path='/create' element={<CreateAccTKV address={locationName}/>}></Route>
                    {/* <Route path='/statistic' element={<ViewStatisticTDTK />}></Route>
                    <Route path='/statistic2' element={<ViewStatisticProductTDTK />}></Route> */}
                </Routes>
            </div>
        </div>
    )
}

export default DashbroadTTK