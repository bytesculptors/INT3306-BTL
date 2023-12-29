import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const CreateAccTKV = (props) => {
  const [tkvName, setTKVName] = useState('')
  const [tkvPassword, setTKVPassword] = useState('')
  const [tkvPhone, setTKVPhone] = useState('')
  console.log(props.address);

  const handleSubmit = () => {
    axios.post('http://localhost:3001/api/create/tkv', {
      tkvName: tkvName,
      tkvPassword: tkvPassword,
      tkvPhone: tkvPhone,
      tkvAddress: props.address
    }).then(() => {
      alert('Insert successfully!')
    })
  }
  return (
    <div className='mt-4'>
      <Form>
        <h4>Tạo tài khoản cho tập kết viên</h4>
        <FloatingLabel
          controlId="floatingInput"
          label="Họ tên"
          className="mb-3 form-input"
        >
          <Form.Control
            type="text"
            placeholder="Nhập họ tên"
            name='tkvName'
            onChange={(e) => {
              setTKVName(e.target.value)
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
            name='tkvPassword'
            onChange={(e) => {
              setTKVPassword(e.target.value)
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
            name='tkvPhone'
            onChange={(e) => {
              setTKVPhone(e.target.value)
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

export default CreateAccTKV
