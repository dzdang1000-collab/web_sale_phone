# 📱 PhoneStore - Website Bán Điện Thoại Trực Tuyến

## 🎯 Giới thiệu
PhoneStore là một website bán điện thoại trực tuyến đơn giản, được xây dựng bằng HTML/CSS/JavaScript thuần. Website hỗ trợ tìm kiếm, lọc sản phẩm, và giỏ hàng với lưu trữ cục bộ (localStorage).

## ✨ Tính năng
- ✅ **Hiển thị danh sách sản phẩm** - 25 sản phẩm điện thoại và máy tính bảng
- 🔍 **Tìm kiếm sản phẩm** - Tìm kiếm theo tên, thương hiệu, mô tả
- 📊 **Lọc sản phẩm** - Lọc theo thương hiệu, danh mục, giá
- 🔀 **Sắp xếp sản phẩm** - Sắp xếp theo giá (tăng/giảm), tên (A-Z/Z-A)
- 🛒 **Giỏ hàng** - Thêm/xóa/cập nhật sản phẩm
- 💾 **Lưu trữ cục bộ** - Giỏ hàng được lưu ở localStorage (persist khi reload)
- 📦 **Chi tiết sản phẩm** - Xem thông tin chi tiết, specs sản phẩm
- 📱 **Responsive Design** - Hỗ trợ desktop, tablet, mobile

## 📁 Cấu trúc thư mục
```
clone_web_sale_phone/
├── index.html                 # Trang chủ
├── cart.html                  # Trang giỏ hàng
├── product-detail.html        # Trang chi tiết sản phẩm
├── css/
│   ├── variables.css          # CSS variables (màu, spacing, font, shadow)
│   └── style.css              # CSS chính (styles, layout, responsive)
├── js/
│   ├── products.js            # Dữ liệu sản phẩm (25 items)
│   ├── cart.js                # Logic giỏ hàng (class ShoppingCart)
│   └── ui.js                  # Xử lý UI/DOM (display, filter, search)
├── images/                    # Thư mục chứa ảnh (optional)
├── data/                      # Thư mục chứa dữ liệu (optional)
└── README.md                  # File hướng dẫn này
```

## 🚀 Cách sử dụng
1. **Mở website**: Mở file `index.html` trong trình duyệt web
2. **Duyệt sản phẩm**: Cuộn xuống để xem danh sách các sản phẩm
3. **Tìm kiếm**: Nhập tên sản phẩm ở ô "Tìm kiếm sản phẩm"
4. **Lọc sản phẩm**: Chọn thương hiệu, danh mục, hoặc khoảng giá
5. **Xem chi tiết**: Nhấn nút "Chi tiết" trên sản phẩm để xem thông tin đầy đủ
6. **Thêm vào giỏ**: Nhấn nút "Thêm vào giỏ" hoặc "Thêm vào giỏ hàng"
7. **Quản lý giỏ**: 
   - Truy cập trang giỏ hàng (🛒 Giỏ hàng)
   - Cập nhật số lượng bằng nút +/- hoặc nhập trực tiếp
   - Xóa sản phẩm bằng nút "Xóa"
   - Xem tóm tắt đơn hàng (tạm tính, thuế, phí vận chuyển, tổng cộng)
8. **Thanh toán**: Nhấn "Thanh toán" (demo: xóa giỏ hàng)

## 🎨 Giao diện
- **Header**: Logo, menu navigation, cart badge
- **Hero Section**: Tiêu đề, mô tả, nút CTA
- **Main Content**:
  - Search & Filter Panel (tìm kiếm, lọc, sắp xếp)
  - Products Grid (hiển thị sản phẩm dạng thẻ)
- **Product Card**: Ảnh, tên, thương hiệu, mô tả, giá, nút hành động
- **Footer**: Thông tin công ty, dịch vụ, liên hệ
- **Responsive**: Mobile-first design, hỗ trợ tất cả kích thước màn hình

## 💾 Lưu trữ dữ liệu
- **Sản phẩm**: Hardcoded trong `js/products.js` (25 items)
- **Giỏ hàng**: Lưu ở localStorage với key `shopping_cart`
- **Định dạng**: JSON

### Ví dụ dữ liệu giỏ hàng:
```json
[
  {
    "id": 1,
    "name": "iPhone 15 Pro Max",
    "price": 32000000,
    "quantity": 2,
    "image": "...",
    "brand": "Apple"
  }
]
```

## 📊 Dữ liệu sản phẩm
Mỗi sản phẩm có các thông tin sau:
- `id`: ID duy nhất
- `name`: Tên sản phẩm
- `brand`: Thương hiệu
- `price`: Giá (VND)
- `category`: Danh mục (Smartphone, Tablet)
- `image`: URL hình ảnh
- `description`: Mô tả sản phẩm
- `specs`: Thông số kỹ thuật (screen, ram, storage, camera, battery, os)

### Các sản phẩm có sẵn:
- **Smartphone**: iPhone, Samsung Galaxy, Google Pixel, OnePlus, Xiaomi, OPPO, Vivo, Motorola, Nothing, Realme, Honor, POCO, Sony Xperia, Huawei
- **Tablet**: iPad Pro, iPad Air, Samsung Galaxy Tab, Lenovo Tab, OnePlus Pad

## 🎯 Chức năng chi tiết

### 1. Tìm kiếm
- Tìm kiếm theo tên sản phẩm, thương hiệu, mô tả
- Kết hợp với lọc và sắp xếp

### 2. Lọc
- **Thương hiệu**: Chọn 1 hoặc nhiều thương hiệu
- **Danh mục**: Chọn 1 hoặc nhiều danh mục (Smartphone, Tablet)
- **Giá**: Nhập khoảng giá tối thiểu và tối đa

### 3. Sắp xếp
- Giá tăng dần / Giá giảm dần
- Tên A-Z / Tên Z-A

### 4. Giỏ hàng
- Thêm sản phẩm với số lượng
- Cập nhật số lượng từ từ từng sản phẩm
- Xóa sản phẩm khỏi giỏ
- Xóa toàn bộ giỏ hàng
- Tính toán tạm tính, thuế (10%), phí vận chuyển (50k)
- Hiển thị tổng cộng

### 5. Chi tiết sản phẩm
- Hiển thị ảnh lớn
- Hiển thị tất cả thông số kỹ thuật
- Cho phép chọn số lượng trước khi thêm vào giỏ

## 🔧 Công nghệ sử dụng
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Lưu trữ**: localStorage (Web Storage API)
- **Design**: Mobile-first, Responsive
- **Icons/Emojis**: Unicode emojis
- **Placeholder Images**: via.placeholder.com

## 📱 Hỗ trợ trình duyệt
- Chrome/Chromium (mới nhất)
- Firefox (mới nhất)
- Safari (mới nhất)
- Edge (mới nhất)
- Mobile browsers (Chrome, Safari iOS, Firefox Mobile)

## 🚫 Giới hạn & Lưu ý
- ❌ Không có backend - tất cả dữ liệu được hardcode
- ❌ Không có thanh toán thực tế - chỉ là demo
- ❌ Không có xác thực người dùng
- ❌ Không có lịch sử đơn hàng
- ⚠️ Dữ liệu giỏ hàng chỉ lưu trên thiết bị này (localStorage)
- ⚠️ Hình ảnh sản phẩm là placeholder, có thể thay bằng URL thực

## 📈 Mở rộng tương lai
- [ ] Backend API (Node.js/Express, Laravel, Python)
- [ ] Database (MySQL, MongoDB, PostgreSQL)
- [ ] Xác thực người dùng (JWT, OAuth)
- [ ] Quản lý đơn hàng
- [ ] Lịch sử mua hàng
- [ ] Rating & Review sản phẩm
- [ ] Thanh toán online (Stripe, PayPal)
- [ ] Admin panel
- [ ] Email notifications
- [ ] Real-time inventory

## 📝 License
Dự án này là demo/học tập, không có giới hạn sử dụng.

## 👤 Tác giả
PhoneStore Demo - Tạo bởi AI Assistant

## 📧 Hỗ trợ
Đây là project demo, không có hỗ trợ chính thức. Bạn có thể tự do chỉnh sửa và mở rộng.

---

**Thưởng thức mua sắm trực tuyến tại PhoneStore!** 🎉
