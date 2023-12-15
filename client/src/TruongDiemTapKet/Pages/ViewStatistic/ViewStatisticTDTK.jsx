import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Table from 'react-bootstrap/Table';
import axios from 'axios'

const ViewStatisticTDTK = () => {
  const [userList, setUserList] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/api/getTDTK').then((response) => {
      setUserList(response.data)
    })
  })
  // const transferToGather = (id) => {
  //   axios.put('http://localhost:3001/api/update')
  // }
  return (
    <div>
      <div className="search mt-4">
        <SearchIcon />
        <input style={{ width: '1000px', borderRadius: '5px', border: '2px solid #ccc' }} type="text" placeholder='Tìm kiếm' />
      </div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>tài khoản</th>
            <th>Mật khẩu</th>
            <th>Chức vụ</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            
          </tr>
        </thead>
        <tbody>
          {userList.map((users) => {
            return <tr>
              <td>{users.UserName}</td>
              <td>{users.Password}</td>
              <td>{users.UserType}</td>
              <td>{users.phone_number}</td>
              <td>{users.LocationName}</td>
             
            </tr>
          })}
          
        </tbody>
      </Table>
    </div>
  )
}

export default ViewStatisticTDTK
