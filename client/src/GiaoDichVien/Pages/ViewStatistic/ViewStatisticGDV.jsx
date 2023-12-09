import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

const ViewStatisticGDV = () => {
  const [transactionList, setTransactionList] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/api/get').then((response) => {
      setTransactionList(response.data)
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
            <th>Mã giao dịch</th>
            <th>Mã số người gửi</th>
            <th>Mã số người nhận</th>
            <th>Ngày gửi</th>
            <th>Mô tả</th>
            <th>Trạng thái hàng</th>
            <th>Loại hàng</th>
            <th>Gửi tới điểm tập kết</th>
          </tr>
        </thead>
        <tbody>
          {transactionList.map((transaction) => {
            return <tr>
              <td>{transaction.TransactionID}</td>
              <td>{transaction.SenderUserID}</td>
              <td>{transaction.ReceiverUserID}</td>
              <td>{transaction.SentDate}</td>
              <td>{transaction.Description}</td>
              <td>{transaction.Status}</td>
              <td>{transaction.Type}</td>
              <td>
                <Button
                  variant="primary"
                  type="submit"
                  // onClick={transferToGather(transaction.TransactionID)}
                  >
                  Chuyển tới tập kết
                </Button>
              </td>
            </tr>
          })}
          
        </tbody>
      </Table>
    </div>
  )
}

export default ViewStatisticGDV
