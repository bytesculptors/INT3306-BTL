import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const CreateAccTGD = (props) => {
  const [staffName, setStaffName] = useState('')
  const [staffPass, setStaffPass] = useState('')
  const [staffPhone, setStaffPhone] = useState('')

  // const [receiverName, setReceiverName] = useState('')
  // const [receiverPhone, setReceiverPhone] = useState('')
  // const [receiverAddress, setReceiverAddress] = useState('')

  // const [productType, setProductType] = useState('')
  // const [productStatus, setProductStatus] = useState('')
  // const [productDescription, setProductDescription] = useState('')

  const handleSubmit = () => {
    axios.post('http://localhost:3001/api/create', {
      staffName: staffName,
      staffPhone: staffPhone,
      staffPass: staffPass,
      // senderAddress: props.senderAddress,
      // receiverName: receiverName,
      // receiverPhone: receiverPhone,
      // receiverAddress: receiverAddress,
      // productType: productType,
      // productStatus: productStatus,
      // productDescription: productDescription
    }).then(() => {
      alert('Insert successfully!')
    })
  }


  return (
    <div className='mt-4'>
      <Form>
        {/* Tạo Giao Dịch Viên */}
        <h4>Tạo tài khoản Giao Dịch Viên</h4>
        <FloatingLabel
          controlId="floatingInput"
          label="Họ tên"
          className="mb-3 form-input"
        >
          <Form.Control
            type="text"
            placeholder="Nhập họ tên"
            name='staffName'
            onChange={(e) => {
              setStaffName(e.target.value)
            }} />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Mật khẩu"
          className="mb-3 form-input"
        >
          <Form.Control
            type="text"
            placeholder="Nhập mật khẩu"
            name='staffPass'
            onChange={(e) => {
              setStaffPass(e.target.value)
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
            name='staffPhone'
            onChange={(e) => {
              setStaffPhone(e.target.value)
            }} />
        </FloatingLabel>

        {/* Người nhận */}
        {/* <h4>Người nhận</h4>
        <FloatingLabel
          controlId="floatingInput"
          label="Họ tên"
          className="mb-3 form-input"
        >
          <Form.Control
            type="text"
            placeholder="Nhập họ tên"
            name='receiverName'
            onChange={(e) => {
              setReceiverName(e.target.value)
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
            name='receiverPhone'
            onChange={(e) => {
              setReceiverPhone(e.target.value)
            }} />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Địa chỉ"
          className='mb-5 form-input'
        >
          <Form.Control
            type="text"
            placeholder="Nhập địa chỉ"
            name='receiverAddress'
            onChange={(e) => {
              setReceiverAddress(e.target.value)
            }} />
        </FloatingLabel> */}

        {/* Đơn hàng */}
        {/* <h4>Đơn hàng</h4>
        <FloatingLabel
          controlId="floatingPassword"
          label="Loại hàng"
          className="mb-3 form-input"
        >
          <Form.Select
            name="productType"
            onChange={(e) => {
              setProductType(e.target.value);
            }}
          >
            <option value="">Chọn loại hàng</option>
            <option value="HangDeVo">Hàng dễ vỡ</option>
            <option value="TaiLieu">Tài liệu</option>
            <option value="LoaiHangKhac">Loại hàng khác</option>
          </Form.Select>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Tình trạng"
          className='mb-3 form-input'
        >
          <Form.Control
            type="text"
            placeholder="Nhập tình trạng"
            name='productStatus'
            onChange={(e) => {
              setProductStatus(e.target.value)
            }} />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Mô tả"
          className='mb-3 form-input'
        >
          <Form.Control
            type="text"
            placeholder="Mô tả"
            name='productDescription'
            onChange={(e) => {
              setProductDescription(e.target.value)
            }} />
        </FloatingLabel> */}
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

export default CreateAccTGD
