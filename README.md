# 📱 PhoneStore - Website Bán Điện Thoại Trực Tuyến

## 🌐 Live Demo
🚀 **Website đang chạy tại:** https://dzdang1000-collab.github.io/web_sale_phone/

[![Deploy Status](https://github.com/dzdang1000-collab/web_sale_phone/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/dzdang1000-collab/web_sale_phone/actions)

---

## 🎯 Giới thiệu
PhoneStore là một website bán điện thoại, tablet, máy ảnh và laptop trực tuyến, được xây dựng bằng HTML/CSS/JavaScript thuần. Website hỗ trợ tìm kiếm, lọc sản phẩm, lọc theo danh mục, và giỏ hàng với lưu trữ cục bộ (localStorage).

## ✨ Tính năng
- ✅ **27+ sản phẩm** - Smartphone, Tablet, Camera, Laptop
- ✅ **4 Danh mục** - Điện thoại, Máy tính bảng, Máy ảnh, Laptop
- 🔍 **Tìm kiếm nâng cao** - Tìm kiếm theo tên, thương hiệu, mô tả
- 📊 **Lọc đa chiều** - Lọc theo thương hiệu, danh mục, giá cả
- 🔀 **Sắp xếp linh hoạt** - Sắp xếp theo giá (tăng/giảm), tên (A-Z/Z-A)
- 📱 **Lọc theo danh mục** - Click các nút Điện thoại, Tablet, Máy ảnh, Laptop ở navbar
- 🛒 **Giỏ hàng thông minh** - Thêm/xóa/cập nhật sản phẩm
- 💾 **Lưu trữ cục bộ** - Giỏ hàng được lưu ở localStorage (persist khi reload)
- 📦 **Chi tiết sản phẩm** - Xem thông tin chi tiết, specs sản phẩm
- 👤 **Trang đăng nhập** - Mẫu login page
- 📱 **Responsive Design** - Hỗ trợ desktop, tablet, mobile
- 🌈 **Giao diện hiện đại** - Chủ đề tím gradient, shadows, animations

## 🚀 Cách sử dụng nhanh
1. **Truy cập website**: https://dzdang1000-collab.github.io/web_sale_phone/
2. **Duyệt danh mục**: Click "Điện thoại", "Tablet", "Máy ảnh", "Laptop" ở navbar
3. **Tìm kiếm**: Dùng ô search hoặc filter bên trái
4. **Xem chi tiết**: Click vào sản phẩm để xem thông tin đầy đủ
5. **Thêm vào giỏ**: Nhấn nút "Thêm vào giỏ"
6. **Thanh toán**: Vào trang giỏ hàng để xem tóm tắt và thanh toán

## 📁 Cấu trúc thư mục
```
clone_web_sale_phone/
├── index.html                 # Trang chủ (Hero + Products)
├── cart.html                  # Trang giỏ hàng
├── product-detail.html        # Trang chi tiết sản phẩm
├── login.html                 # Trang đăng nhập
├── css/
│   └── style.css              # CSS chính (purple theme, responsive)
├── js/
│   ├── products.js            # Dữ liệu sản phẩm (27 items)
│   ├── cart.js                # Logic giỏ hàng
│   └── ui.js                  # Xử lý UI/DOM
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions deployment
├── images/                    # Thư mục chứa ảnh
├── data/                      # Thư mục chứa dữ liệu
├── run.bat / run.ps1          # Scripts để chạy locally
├── HƯỚNG_DẪN.md               # Hướng dẫn tiếng Việt
└── README.md                  # File hướng dẫn này
```

## 🎨 Sản phẩm & Danh mục

### 📱 Smartphone (10 sản phẩm)
- iPhone 15 Pro Max, iPhone 15 Plus
- Samsung Galaxy S24 Ultra, Galaxy Z Fold 5
- Google Pixel 8 Pro
- OnePlus 12, Oppo Find X6 Pro
- Vivo X100, Xiaomi Redmi Note 13, Motorola Edge 50 Ultra

### 🖥️ Tablet (5 sản phẩm)
- iPad Pro 12.9, iPad Air 2024
- Samsung Galaxy Tab S10
- Lenovo Tab P12 Pro
- OnePlus Pad

### 📷 Camera (6 sản phẩm)
- Canon EOS R5
- Sony Alpha 7R V
- Nikon Z9
- Fujifilm X-T5
- Panasonic Lumix S5II
- DJI Mavic 3 Pro

### 💻 Laptop (6 sản phẩm)
- MacBook Pro 16" M3 Max
- Dell XPS 15
- ASUS ZenBook 14 OLED
- Lenovo ThinkPad X1 Carbon
- HP Spectre x360 16
- Microsoft Surface Laptop Studio

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
- **Sản phẩm**: Hardcoded trong `js/products.js` (27 items, 4 danh mục)
- **Giỏ hàng**: Lưu ở localStorage với key `shopping_cart`
- **Hình ảnh**: Từ Unsplash (URLs)
- **Định dạng**: JSON

### Ví dụ dữ liệu sản phẩm:
```json
{
  "id": 1,
  "name": "iPhone 15 Pro Max",
  "brand": "Apple",
  "price": 32000000,
  "category": "Smartphone",
  "image": "https://images.unsplash.com/...",
  "description": "Flagship cao cấp từ Apple với chip A17 Pro",
  "specs": {
    "screen": "6.7 inch Super Retina XDR",
    "ram": "8GB",
    "storage": "256GB",
    "camera": "Main 48MP + Ultra 12MP",
    "battery": "4,685 mAh",
    "os": "iOS 17"
  }
}
```

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

## 🚀 Chạy cục bộ (Local Development)

### Yêu cầu
- Python 3.6+ hoặc Node.js 14+
- Trình duyệt web (Chrome, Firefox, Safari, Edge)
- Git (để clone repository)

### Hướng dẫn cài đặt
1. **Clone repository:**
   ```bash
   git clone https://github.com/dzdang1000-collab/web_sale_phone.git
   cd web_sale_phone
   ```

2. **Chạy với Python:**
   ```bash
   python -m http.server 8000
   # Hoặc: python3 -m http.server 8000
   ```

3. **Hoặc dùng Windows batch script:**
   ```bash
   run.bat
   ```

4. **Mở trình duyệt:**
   - Truy cập: http://localhost:8000

### Dừng server
- Nhấn `Ctrl + C` trong terminal

## 🌐 Triển khai (Deployment)

Website được tự động deploy lên GitHub Pages khi bạn push code:

1. **Push code:**
   ```bash
   git add .
   git commit -m "Your message"
   git push origin main
   ```

2. **GitHub Actions tự động chạy** (xem tại Actions tab)

3. **Website cập nhật tại:** https://dzdang1000-collab.github.io/web_sale_phone/

## 📝 License
Dự án này là demo/học tập, không có giới hạn sử dụng.

## 👤 Tác giả
PhoneStore - Tạo bởi Dang Tran

## 📧 Liên hệ
- GitHub: https://github.com/dzdang1000-collab
- Email: dzdang1000@gmail.com

---

**Thưởng thức mua sắm trực tuyến tại PhoneStore!** 🎉

[🔗 Truy cập website](https://dzdang1000-collab.github.io/web_sale_phone/) | [⭐ GitHub](https://github.com/dzdang1000-collab/web_sale_phone)
