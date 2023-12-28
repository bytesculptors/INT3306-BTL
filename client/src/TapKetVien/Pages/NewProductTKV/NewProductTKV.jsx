import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

const NewProductTKV = (props) => {
  const [transactionList, setTransactionList] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:3001/api/get/tkv/:${props.senderAddress}`).then((response) => {
      setTransactionList(response.data)
    })
  })

  const handleUpdate = (id) => {
    axios.put(`http://localhost:3001/api/update/tkv/${id}`).then(() => {
      alert("Cập nhật thành công!")
    })
  }
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
            <th>Gửi tới tập kết đích</th>
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
              <td style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => {handleUpdate(transaction.TransactionID)}}
                  >
                  Gửi
                </Button>
              </td>
            </tr>
          })}
          
        </tbody>
      </Table>
    </div>
  )
}

export default NewProductTKV