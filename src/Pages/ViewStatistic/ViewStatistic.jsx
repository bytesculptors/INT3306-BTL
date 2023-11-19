import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Table from 'react-bootstrap/Table';

const ViewStatistic = () => {
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
            <th>Trạng thái giao dịch</th>
            <th>Gửi tới điểm tập kết</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  )
}

export default ViewStatistic
