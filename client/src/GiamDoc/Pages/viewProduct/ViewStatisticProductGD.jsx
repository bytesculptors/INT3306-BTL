import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Table from 'react-bootstrap/Table';
import axios from 'axios'

const ViewStatisticProductGD = () => {
  const [userList, setUserList] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/api/getProductGD').then((response) => {
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
            <th>Khách hàng</th>
            <th>Loại hàng</th>
            <th>Mô tả</th>
            <th>Ngày gửi</th>
            <th>Trạng thái</th>
            
          </tr>
        </thead>
        <tbody>
          {userList.map((item) => (
              <tr key={item.GoodID}>
                <td>{item.UserName}</td>
                <td>{item.Type}</td>
                <td>{item.Description}</td>
                <td>{item.SentDate}</td>
                <td>{item.Status}</td>
              </tr>
            ))}
          
        </tbody>
      </Table>
    </div>
  )
}

export default ViewStatisticProductGD
