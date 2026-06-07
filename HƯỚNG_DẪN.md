# 📱 PhoneStore - Hướng Dẫn Chạy Website

## 🌐 ⭐ CÁCH CHẠY ĐƠN GIẢN NHẤT (Windows)

### 💻 Bước 1: Download Python
Nếu chưa có Python, download tại: https://www.python.org/downloads/

### 🚀 Bước 2: Chạy Website
**Cách A - Dùng Batch File (Dễ nhất):**
1. Tìm file `run.bat` trong thư mục dự án
2. Nhấp đôi vào nó
3. Chờ server khởi động
4. Mở trình duyệt → `http://localhost:8000`

**Cách B - Mở Command Prompt:**
```cmd
cd e:\cudangprojects\clone_web_sale_phone
python -m http.server 8000
```
Sau đó mở: `http://localhost:8000` trong trình duyệt

**Cách C - Mở Trực Tiếp (Không cần server):**
- Nhấp đôi vào `index.html`
- ⚠️ Một số tính năng có thể không hoạt động

---

## ✅ Các Tính Năng Chính

### 🏠 Trang Chủ
- ✨ 25 sản phẩm điện thoại & tablet
- 🔍 **Tìm kiếm**: Gõ tên sản phẩm
- 🏷️ **Lọc**: Theo thương hiệu, danh mục, khoảng giá
- ↕️ **Sắp xếp**: Giá (tăng/giảm), tên (A-Z/Z-A)
- 🎨 **Giao diện**: Kiểu CellphoneS.com.vn (đỏ, chuyên nghiệp)

### 🛒 Giỏ Hàng
- ➕ Thêm sản phẩm vào giỏ
- ❌ Xóa sản phẩm
- 📊 Cập nhật số lượng
- 💰 Tính tổng tiền (bao gồm thuế 10%, phí vận chuyển 50k)
- 💾 **Tự động lưu** vào localStorage (không mất khi tắt)
- 🏷️ Badge hiển thị số sản phẩm

### 📋 Chi Tiết Sản Phẩm
- 🖼️ Hình ảnh sản phẩm
- 📋 Thông số kỹ thuật (màn hình, RAM, camera, pin, OS, v.v.)
- ⭐ Đánh giá (demo)
- 📦 Lựa chọn số lượng
- ✓ Bảo hành 12 tháng, giao hàng miễn phí, đổi trả 7 ngày

---

## 📁 Cấu Trúc Thư Mục

```
clone_web_sale_phone/
├── index.html              # Trang chủ
├── cart.html               # Giỏ hàng
├── product-detail.html     # Chi tiết sản phẩm
├── run.bat                 # Script chạy website (Windows)
├── run.ps1                 # Script chạy website (PowerShell)
├── css/
│   ├── style.css           # CSS chính (CellphoneS style)
│   └── style.css.backup    # Backup CSS cũ
├── js/
│   ├── products.js         # Dữ liệu sản phẩm (25 loại)
│   ├── cart.js             # Logic giỏ hàng (localStorage)
│   └── ui.js               # Xử lý UI & DOM
├── images/                 # Thư mục hình ảnh (trống)
├── data/                   # Thư mục dữ liệu (trống)
├── README.md               # Tài liệu dự án
└── HƯỚNG_DẪN.md           # File này
```

---

## 🎨 Thiết Kế & Tính Năng

### 🎯 Đặc Điểm Thiết Kế
- **Màu chính:** Đỏ (#e30613) - CellphoneS style
- **Font chữ:** Roboto (Google Fonts)
- **Layout:** Sidebar lọc + Grid sản phẩm
- **Responsive:** Mobile, Tablet, Desktop

### 📱 Điểm Dừng Responsive
- 🖥️ Desktop: ≥ 1024px
- 📱 Tablet: 768px - 1023px
- 📱 Mobile: < 768px

### 🔧 Công Nghệ
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Lưu Trữ:** localStorage (JSON)
- **Hình Ảnh:** Unsplash (online URLs)
- **Font:** Google Fonts (Roboto)

---

## 💾 Lưu Trữ Dữ Liệu

### localStorage
- **Key:** `shopping_cart`
- **Dữ liệu:** Giỏ hàng (JSON)
- **Tự động:** Lưu khi thêm/xóa/cập nhật
- **Vĩnh viễn:** Không bị mất khi tắt trình duyệt

```javascript
// Ví dụ dữ liệu trong localStorage:
{
  "shopping_cart": [
    {
      "id": 1,
      "name": "iPhone 15 Pro Max",
      "price": 32000000,
      "quantity": 2,
      "image": "https://..."
    }
  ]
}
```

---

## 📦 Danh Sách Sản Phẩm (25 loại)

### 🍎 Apple (3 sản phẩm)
- iPhone 15 Pro Max - 32M
- iPhone 15 Plus - 26M
- iPad Air - 22M

### 🔷 Samsung (3 sản phẩm)
- Galaxy S24 Ultra - 30M
- Galaxy Z Fold 5 - 28M
- Galaxy Tab S8 - 16M

### 🔍 Google (2 sản phẩm)
- Pixel 8 Pro - 25M
- Pixel Tablet - 14M

### ⚪ Xiaomi (2 sản phẩm)
- Xiaomi 14 Ultra - 20M
- Redmi Note 13 - 9M

### Và các thương hiệu khác...
- OnePlus, Vivo, Oppo, Nothing, Sony, Motorola, Lenovo, Nokia, etc.

---

## 🎮 Cách Thử Nghiệm Tính Năng

### 1️⃣ **Tìm Kiếm**
- Gõ "iPhone" vào ô tìm kiếm
- Xem kết quả lọc

### 2️⃣ **Lọc Sản Phẩm**
- Chọn "Apple" ở bộ lọc thương hiệu
- Chọn "Smartphone" ở danh mục
- Nhấn "Áp dụng bộ lọc"

### 3️⃣ **Thêm Vào Giỏ**
- Nhấn nút "Thêm vào giỏ" trên sản phẩm
- Xem badge giỏ hàng cập nhật

### 4️⃣ **Xem Giỏ Hàng**
- Nhấn 🛒 Giỏ hàng ở header
- Cập nhật số lượng
- Xem tổng tiền (bao gồm thuế + vận chuyển)

### 5️⃣ **Chi Tiết Sản Phẩm**
- Nhấn "Chi tiết" hoặc vào sản phẩm
- Xem thông số kỹ thuật đầy đủ
- Chọn số lượng và thêm vào giỏ

---

## 🐛 Khắc Phục Sự Cố

### ❌ "Port 8000 already in use"
**Giải pháp:** Dùng port khác
```cmd
python -m http.server 8080
```
Sau đó mở: `http://localhost:8080`

### ❌ "Hình ảnh không hiển thị"
**Nguyên nhân:** Kết nối internet hoặc URL hết hạn
**Giải pháp:**
1. Kiểm tra kết nối internet
2. Tắt adblocker
3. Xóa cache: Ctrl+Shift+Delete
4. Thử trình duyệt khác

### ❌ "Giỏ hàng không lưu"
**Giải pháp:**
1. Kiểm tra Developer Tools (F12) > Application > localStorage
2. Xóa dữ liệu: `localStorage.clear()` trong console
3. Kiểm tra: Trình duyệt có cho phép localStorage không
4. Thử trình duyệt khác (Chrome, Firefox, Edge)

### ❌ "Python không tìm thấy"
**Giải pháp:**
1. Cài Python: https://www.python.org/downloads/
2. Khi cài, chọn: ✅ "Add Python to PATH"
3. Khởi động lại Command Prompt / PowerShell

---

## 🚀 Tính Năng Có Thể Mở Rộng (Tương Lai)

- 🔐 Đăng nhập / Đăng ký tài khoản
- 💳 Thanh toán online (Stripe, PayPal, VNPAY)
- 📧 Email xác nhận đơn hàng
- 📦 Quản lý đơn hàng (tracking)
- 🛠️ Admin dashboard
- ⭐ Review & Rating sản phẩm
- ❤️ Wishlist / Yêu thích
- 🔔 Thông báo khuyến mãi
- 💬 Live chat hỗ trợ
- 📊 Thống kê doanh số
- Và nhiều tính năng khác...

---

## 📞 Liên Hệ & Hỗ Trợ

- 📧 Email: support@phonestore.com
- 📞 Hotline: 1900-xxxx
- 📍 Địa chỉ: 123 Nguyễn Huệ, TP. HCM
- 🌐 Facebook: /phonestore
- 📸 Instagram: @phonestore

---

## 📄 Thông Tin Dự Án

- **Phiên bản:** 1.0 (CellphoneS Style)
- **Cập nhật lần cuối:** 2024
- **Trạng thái:** ✅ Hoàn chỉnh
- **Giấy phép:** © 2024 PhoneStore. Tất cả quyền được bảo lưu.

---

## ✨ Chúc Bạn Sử Dụng Vui Vẻ! 🎉

Nếu có thắc mắc hoặc muốn góp ý, vui lòng liên hệ chúng tôi.

**Happy Shopping! 🛍️**
