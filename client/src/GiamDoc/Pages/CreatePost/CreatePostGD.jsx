import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const CreatePostGD = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('')

  const [phone, setPhone] = useState('')
  const [locationName, setLocationName] = useState('')
  

  const handleSubmit = () => {
    axios.post('http://localhost:3002/api/createGD', {
      username: username,
      password: password,
      userType: userType,
      phone: phone,
      locationName: locationName,
      
    }).then(() => {
      alert('Insert successfully!')
    })
  }


  return (
    <div className='mt-4'>
      <Form>
        {/* Người gửi */}
        <h4>Tạo tài khoản</h4>
        <FloatingLabel
          controlId="floatingInput"
          label="Tài khoản"
          className="mb-3 form-input"
        >
          <Form.Control
            type="text"
            placeholder="Nhập tên tài khoản"
            name='username'
            onChange={(e) => {
              setUserName(e.target.value)
            }} />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="mật khẩu"
          className="mb-3 form-input"
        >
          <Form.Control
            type="text"
            placeholder="Nhập mật khẩu"
            name='password'
            onChange={(e) => {
              setPassword(e.target.value)
            }} />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="chức vụ"
          className='mb-5 form-input'
        >
          <Form.Select
            placeholder="Nhập chức vụ"
            name='userType'
            onChange={(e) => {
              setUserType(e.target.value)
            }} 
          >
            <option value="trưởng điểm giao dịch">trưởng điểm giao dịch</option>
            <option value="trưởng điểm tập kết">trưởng điểm tập kết</option>
            <option value="giao dịch viên">giao dịch viên</option>
            <option value="tập kết viên">tập kết viên</option>
          
          </Form.Select>
        </FloatingLabel>

        {/* Người nhận */}
        
        <FloatingLabel
          controlId="floatingInput"
          label="số điện thoại"
          className="mb-3 form-input"
        >
          <Form.Control
            type="text"
            placeholder="Nhập số điện thoại"
            name='phone'
            onChange={(e) => {
              setPhone(e.target.value)
            }} />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Địa chỉ"
          className="mb-3 form-input"
        >
          <Form.Control
            type="text"
            placeholder="Nhập địa chỉ"
            name='locationName'
            onChange={(e) => {
              setLocationName(e.target.value)
            }} />
        </FloatingLabel>
        
        <Button
          className='button-submit'
          variant="primary"
          type="submit"
          onClick={handleSubmit}>
          Ghi nhận
        </Button>
      </Form>
    </div>
  )
}

export default CreatePostGD
