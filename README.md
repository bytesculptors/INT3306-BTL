# BÀI TẬP LỚN Lập Trình Web - MagicPost
## [Video Demo](https://www.youtube.com/watch?v=_wTxhsIFBxk)

## Sinh viên thực hiện
| Họ và tên | Mã Sinh Viên| 
|--------------|-------|
| Trần Tuấn Nghĩa | 21020549| 
| Phạm Minh Hiếu | 21020320|
| Nguyễn Thịnh Thuận | 21020410|
## Giới thiệu
MagicPost là công ty hoạt động trong lĩnh vực chuyển phát. Công ty này có các điểm giao dịch phủ khắp cả nước. Mỗi điểm giao dịch phụ trách một vùng. Ngoài các điểm giao dịch, công ty cũng có nhiều điểm tập kết hàng hóa. Mỗi điểm giao dịch sẽ làm việc với một điểm tập kết. Ngược lại, một điểm tập kết sẽ làm việc với nhiều điểm giao dịch.

Người gửi, có hàng cần gửi, đem hàng đến một điểm giao dịch (thường là gần nhất) để gửi. Hàng, sau đó, được đưa đến điểm tập kết ứng với điểm giao dịch của người gửi, rồi được chuyển đến điểm tập kết ứng với điểm giao dịch của người nhận. Tại điểm giao dịch của người nhận, nhân viên giao hàng sẽ chuyển hàng đến tận tay người nhận.

Công ty cần phát triển một phần mềm nhằm quản lý hệ thống chuyển phát nêu trên
## Mô tả chức năng
### Chức năng cho lãnh đạo công ty
- Quản lý hệ thống các điểm giao dịch và điểm tập kết.
- Quản lý tài khoản trưởng điểm điểm tập kết và điểm giao dịch. Mỗi điểm giao dịch hoặc điểm tập kết có một tài khoản trưởng điểm.
- Thống kê hàng gửi, hàng nhận trên toàn quốc, từng điểm giao dịch hoặc điểm tập kết.

### Chức năng cho trưởng điểm tại điểm giao dịch
- Cấp tài khoản cho giao dịch viên tại điểm giao dịch.
- Thống kê hàng gửi, hàng nhận tại điểm giao dịch.

### Chức năng cho giao dịch viên tại điểm giao dịch
- Ghi nhận hàng cần gửi của khách (người gửi), in giấy biên nhận chuyển phát và phát cho khách hàng (tham khảo Hình 1 trong phụ lục).
- Tạo đơn chuyển hàng gửi đến điểm tập kết mỗi/trước khi đem hàng gửi đến điểm tập kết.
- Xác nhận (đơn) hàng về từ điểm tập kết.
- Tạo đơn hàng cần chuyển đến tay người nhận.
- Xác nhận hàng đã chuyển đến tay người nhận theo .
- Xác nhận hàng không chuyển được đến người nhận và trả lại điểm giao dịch.
- Thống kê các hàng đã chuyển thành công, các hàng chuyển không thành công và trả lại điểm giao dịch.
### Chức năng cho trưởng điểm tại điểm tập kết
- Quản lý tài khoản nhân viên tại điểm tập kết.
- Thống kê hàng đi, đến.

### Chức năng cho nhân viên tại điểm tập kết
- Xác nhận (đơn) hàng đi từ điểm giao dịch chuyển đến.
- Tạo đơn chuyển hàng đến điểm tập kết đích (ứng với điểm giao dịch đích, tức điểm giao dịch phụ trách vùng ứng với địa chỉ của người nhận).
- Xác nhận (đơn) hàng nhận về từ điểm tập kết khác.
- Tạo đơn chuyển hàng đến điểm giao dịch đích.
### Chức năng cho khách hàng
- Tra cứu trạng thái và tiến trình chuyển phát của kiện hàng mình gửi.
## Các công nghệ sử dụng
- NodeJS
- ReactJS
- MySQL
## Hướng dẫn sử dụng
- Tải XAMPP tại "https://www.apachefriends.org/download.html" sau đó mở XAMPP control panel rồi bật lần lượt "start" ở Apache và MySQL. Sau đó bật "admin" ở MySQL.
- Tại trang admin, hãy ấn "mới" tạo tên database là "delivery" rồi sau đó ấn "Tạo"
- Sau đó ấn "nhập", tải file sau "" và upload lên. Bỏ tích ở phần "Kiểm tra khóa ngoại" và kéo xuống dưới ấn "Nhập" 
- clone respiratory về máy "https://github.com/bytesculptors/INT3306-BTL.git"
- Nhập lần lượt "cd .\server\", "npm i" và "npm start"
- Mở thêm 1 terminal nhập "cd .\client", "npm i" và "npm start"
