import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const CreateAccGDV = (props) => {
  const [gdvName, setGDVName] = useState('')
  const [gdvPassword, setGDVPassword] = useState('')
  const [gdvPhone, setGDVPhone] = useState('')

  const handleSubmit = () => {
    axios.post('http://localhost:3001/api/create/gdv', {
      gdvName: gdvName,
      gdvPassword: gdvPassword,
      gdvPhone: gdvPhone,
      gdvAddress: props.address
    }).then(() => {
      alert('Insert successfully!')
    })
  }
  return (
    <div className='mt-4'>
      <Form>
        {/* Người gửi */}
        <h4>Tạo tài khảo cho giao dịch viên</h4>
        <FloatingLabel
          controlId="floatingInput"
          label="Họ tên"
          className="mb-3 form-input"
        >
          <Form.Control
            type="text"
            placeholder="Nhập họ tên"
            name='gdvName'
            onChange={(e) => {
              setGDVName(e.target.value)
            }} />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingPassword"
          label="Mật khẩu"
          className="mb-3 form-input"
        >
          <Form.Control
            type="password"
            placeholder="Nhập mật khẩu"
            name='gdvPassword'
            onChange={(e) => {
              setGDVPassword(e.target.value)
            }} />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingPassword"
          label="Số điện thoại"
          className="mb-3 form-input"
        >
          <Form.Control
            type="text"
            placeholder="Nhập số điện thoại"
            name='gdvPhone'
            onChange={(e) => {
              setGDVPhone(e.target.value)
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

export default CreateAccGDV
