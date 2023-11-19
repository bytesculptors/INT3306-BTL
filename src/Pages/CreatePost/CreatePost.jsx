import React from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreatePost = () => {
  return (
    <div className='mt-4'>
      <Form>
        {/* Người gửi */}
        <h4>Người gửi</h4>
        <FloatingLabel
          controlId="floatingInput"
          label="Họ tên"
          className="mb-3 form-input"
        >
          <Form.Control type="text" placeholder="Nhập họ tên" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Số điện thoại"
          className="mb-3 form-input"
        >
          <Form.Control type="text" placeholder="Nhập số điện thoại" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Địa chỉ"
          className='mb-5 form-input'
        >
          <Form.Control type="text" placeholder="Nhập địa chỉ" />
        </FloatingLabel>

        {/* Người nhận */}
        <h4>Người nhận</h4>
        <FloatingLabel
          controlId="floatingInput"
          label="Họ tên"
          className="mb-3 form-input"
        >
          <Form.Control type="text" placeholder="Nhập họ tên" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Số điện thoại"
          className="mb-3 form-input"
        >
          <Form.Control type="text" placeholder="Nhập số điện thoại" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Địa chỉ"
          className='mb-5 form-input'
        >
          <Form.Control type="text" placeholder="Nhập địa chỉ" />
        </FloatingLabel>

        {/* Đơn hàng */}
        <h4>Đơn hàng</h4>
        <FloatingLabel
          controlId="floatingPassword"
          label="Loại hàng"
          className="mb-3 form-input"
        >
          <Form.Control type="text" placeholder="Nhập loại hàng" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Tình trạng"
          className='mb-3 form-input'
        >
          <Form.Control type="text" placeholder="Nhập tình trạng" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Mô tả"
          className='mb-3 form-input'
        >
          <Form.Control type="text" placeholder="Mô tả" />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Ghi nhận
        </Button>
      </Form>
    </div>
  )
}

export default CreatePost
