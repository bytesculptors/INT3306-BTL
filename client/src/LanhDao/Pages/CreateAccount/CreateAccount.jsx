import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const CreateAccLD = (props) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [role, setRole] = useState('truong-diem-giao-dich')
    const [region, setRegion] = useState('Hà Nội')

    const handleSubmit = () => {
        axios.post('http://localhost:3001/api/create/lanhdao/leader', {
            name: name,
            password: password,
            phone: phone,
            role: role,
            region: region
        }).then(() => {
            alert('Insert successfully!')
        })
    }
    return (
        <div className='mt-4'>
            <Form>
                <h4>Tạo tài khoản</h4>
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
                            setName(e.target.value)
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
                            setPassword(e.target.value)
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
                            setPhone(e.target.value)
                        }} />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingPassword"
                    label="Vai trò"
                    className="mb-3 form-input"
                >
                    <Form.Select
                        name="role"
                        onChange={(e) => {
                            setRole(e.target.value);
                        }}
                    >
                        <option value="truong-diem-giao-dich">Trưởng giao dịch</option>
                        <option value="truong-diem-tap-ket">Trưởng tập kết</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingPassword"
                    label="Khu vực"
                    className="mb-3 form-input"
                >
                    <Form.Select
                        name="productType"
                        onChange={(e) => {
                            setRegion(e.target.value);
                        }}
                    >
                        <option value="Hà Nội">Hà Nội</option>
                        <option value="Quảng Ninh">Quảng Ninh</option>
                        <option value="Nghệ An">Nghệ An</option>
                        <option value="Quảng Bình">Quảng Bình</option>
                        <option value="Long An">Long An</option>
                        <option value="Thành phố Hồ Chí Minh">Thành phố Hồ Chí Minh</option>
                    </Form.Select>
                </FloatingLabel>

                <Button
                    className='button-submit'
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                    >
                    Ghi nhận
                </Button>
            </Form>
        </div>
    )
}

export default CreateAccLD
