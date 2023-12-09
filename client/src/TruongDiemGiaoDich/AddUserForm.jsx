import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUserForm = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [position, setPosition] = useState("admin");
  const [msg, setMsg] = useState("");
  const [errorsInfo, setErrorsInfo] = useState([]);
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3002/users/create",
        {
          name: name,
          username: userName,
          position: position,
          password: password,
          confpassword: confpassword,
          status: 1,
        },
        { withCredentials: true }
      );
      navigate("/truongdiemgiaodich");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Thêm người dùng mới</h1>
      {/* <h2 className="subtitle">Thêm người dùng mới</h2> */}
      <div className="card is-shadowless">
      <div className="card-content">
        <div className="content">
          <form onSubmit={saveUser}>
            <div className="field">
              <label className="label ">Tên người dùng</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Tên người dùng"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required="required"
                />
              </div>
            </div>
            <div className="field">
              <label className="label ">Tên đăng nhập</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Tên đăng nhập"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required="required"
                />
              </div>
            </div>
            <div className="field">
              <label className="label ">Mật khẩu</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required="required"
                />
              </div>
            </div>
            <div className="field">
              <label className="label ">Xác nhận mật khẩu</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  placeholder="******"
                  value={confpassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                  required="required"
                />
              </div>
            </div>
            <div className="field">
              <label className="label ">Vai trò</label>
              <div className="control ">
                <div className="select is-fullwidth">
                  <select
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                  >
                    <option value="admin">Ban điều hành</option>
                    <option value="cssx">Cơ sở sản xuất</option>
                    <option value="dlpp">Đại lý phân phối</option>
                    <option value="ttbh">Trung tâm bảo hành</option>
                  </select>
                </div>
              </div>
            </div>
            <p className="has-text-centered">{msg}</p>
            {/* {errorsInfo.map((error, index) => (
              <p className="has-text-centered" key={index}>
                {error.msg}
              </p>
            ))} */}
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-success">
                  Lưu
                </button>
              </div>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;
