import React from 'react'
import { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import ReactToPrint from 'react-to-print';

class InvoicePrint extends React.Component {
  render() {
    const {
      senderName,
      senderPhone,
      receiverName,
      receiverPhone,
      receiverAddress,
      productType,
      productStatus,
      productDescription
    } = this.props;

    return (
      <div className="invoice-container">
        <div className="header">
          <div className="left-section">
            <img src={process.env.PUBLIC_URL + '/avatar.png'} alt="Avatar" className="avatar2" />
            <h2 className="title">MagicPost</h2>
          </div>
          <img src={process.env.PUBLIC_URL + '/frame.png'} alt="Top Right" className="top-right-image" />
        </div>
        <div className="invoice-title">Hóa đơn</div>
        <table className="invoice-table">
          <tbody>
            <tr>
              <td>
                <h3>Người gửi</h3>
                <p>Tên người gửi: {senderName}</p>
                <p>Số điện thoại: {senderPhone}</p>
                <p>Mã khách hàng: { }</p>
              </td>
              <td>
                <h3>Người nhận</h3>
                <p>Tên người gửi:{receiverName}</p>
                <p>Số điện thoại:{receiverPhone}</p>
                <p>Địa chỉ:{receiverAddress}</p>
              </td>
              <td>
                <h3>Đơn hàng</h3>
                <p>Loại hàng: {productType}</p>
                <p>Tình trạng: {productStatus}</p>
                <p>Mô tả: {productDescription}</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="signature-box">
                  <p>Chữ ký khách hàng:</p>
                  <div className="signature-line"></div>
                </div>
              </td>
              <td>
                <div className="signature-box">
                  <p>Chữ ký giao dịch viên:</p>
                  <div className="signature-line"></div>
                </div>
              </td>
              <td>
                <div className="commitment-box">
                  <p>Dịch vụ thêm:</p>
                  <div className="commitment-line"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="notes-section">
          <h3>Lưu ý:</h3>
          <ul>
            <li>MagicPost là đơn vị trung gian vận chuyển, không chịu trách nhiệm về chất lượng hàng hóa.</li>
            <li>Người gửi cam kết nội dung bưu gửi là tài sản hợp pháp, có đầy đủ hóa đơn, chứng từ theo quy định.</li>
            <li>Người gửi xác nhận và hoàn toàn đồng ý các chính sách của MagicPost</li>
          </ul>
        </div>
      </div>

    );
  }
}

const CreatePostGDV = (props) => {
  const [senderName, setSenderName] = useState('')
  const [senderPhone, setSenderPhone] = useState('')

  const [receiverName, setReceiverName] = useState('')
  const [receiverPhone, setReceiverPhone] = useState('')
  const [receiverAddress, setReceiverAddress] = useState('')

  const [productType, setProductType] = useState('')
  const [productStatus, setProductStatus] = useState('')
  const [productDescription, setProductDescription] = useState('')

  const handleSubmit = () => {
    axios.post('http://localhost:3001/api/create', {
      senderName: senderName,
      senderPhone: senderPhone,
      senderAddress: props.senderAddress,
      receiverName: receiverName,
      receiverPhone: receiverPhone,
      receiverAddress: receiverAddress,
      productType: productType,
      productStatus: productStatus,
      productDescription: productDescription
    }).then(() => {
      alert('Insert successfully!')
    })
  }

  const componentRef = useRef();

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
          <Form.Control
            type="text"
            placeholder="Nhập họ tên"
            name='senderName'
            onChange={(e) => {
              setSenderName(e.target.value)
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
            name='senderPhone'
            onChange={(e) => {
              setSenderPhone(e.target.value)
            }} />
        </FloatingLabel>

        {/* Người nhận */}
        <h4>Người nhận</h4>
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
        </FloatingLabel>

        {/* Đơn hàng */}
        <h4>Đơn hàng</h4>
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
        </FloatingLabel>
        <Button
          className='button-submit'
          variant="primary"
          type="submit"
          onClick={handleSubmit}>
          Ghi nhận
        </Button>
        <ReactToPrint
          trigger={() => (
            <Button style={{marginLeft: '10px'}} className='button-print' variant='primary' >
              In hóa đơn
            </Button>
          )}
          content={() => componentRef.current}
        />
        <div style={{ display: 'none' }}>
          <InvoicePrint
            ref={componentRef}
            senderName={senderName}
            senderPhone={senderPhone}
            receiverName={receiverName}
            receiverPhone={receiverPhone}
            receiverAddress={receiverAddress}
            productType={productType}
            productStatus={productStatus}
            productDescription={productDescription}
          />
        </div>
      </Form>
    </div>
  )
}

export default CreatePostGDV
