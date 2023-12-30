import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
import axios from 'axios'

const ViewEmployee = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:3001/api/get/all/leader`).then((response) => {
        setUser(response.data)
    })
  })
  // useEffect(() => {
  //   axios.get(`http://localhost:3001/api/get/`).then((response) => {
  //     setTransactionList(response.data)
  //   })
  // })
  return (
    <div>
      <div className="search mt-4">
        <SearchIcon />
        <input style={{ width: '1000px', borderRadius: '5px', border: '2px solid #ccc' }} type="text" placeholder='Tìm kiếm' />
      </div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ và tên</th>
            <th>Vai trò</th>
            <th>Số điện thoại</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => {
            return <tr>
              <td>{user.UserID}</td>
              <td>{user.UserName}</td>
              <td>{user.UserType}</td>
              <td>{user.phone_number}</td>
            </tr>
          })}
          
        </tbody>
      </Table>
    </div>
  )
}

export default ViewEmployee
