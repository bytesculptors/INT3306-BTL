import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const CreatePostTDGD = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const [phone, setPhone] = useState('')
  const [locationName, setLocationName] = useState('')
  

  const handleSubmit = () => {
    axios.post('http://localhost:3002/api/createTDGD', {
      username: username,
      password: password,
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

export default CreatePostTDGD
