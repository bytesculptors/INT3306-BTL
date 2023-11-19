import './App.css';
import React from 'react';
import SideBar from './Components/SideBar/SideBar';
import UserInfor from './Components/UserInfo/UserInfo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePost from '../src/Pages/CreatePost/CreatePost'
import ViewStatistic from '../src/Pages/ViewStatistic/ViewStatistic'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />
        <UserInfor />
        <div style={{marginLeft: '280px'}}>
          <Routes>
            <Route path='/create' element={<CreatePost/>}></Route>
            <Route path='/statistic' element={<ViewStatistic/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
