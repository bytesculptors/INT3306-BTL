import React from 'react'
import '../Style/Giaodichvien.css'
import SideBarGDV from '../Components/SideBar/SideBarGDV';
import UserInfoGDV from '../Components/UserInfo/UserInfoGDV'
import CreatePostGDV from '../Pages/CreatePost/CreatePostGDV'
import ProductWaiting from './ViewStatistic/ProductWaiting'
import ProductSuccess from './ViewStatistic/ProductSuccess';
import ProductDelivered from './ViewStatistic/ProductDelivered';
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
                    <Route path='/waiting' element={<ProductWaiting senderAddress={locationName} />}></Route>
                    <Route path='/successful' element={<ProductSuccess senderAddress={locationName} />}></Route>
                    <Route path='/delivered' element={<ProductDelivered senderAddress={locationName} />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default DashbroadGDV
