// Phone, Tablet, Camera, and Laptop products data
const PRODUCTS = [
  // ===== SMARTPHONES (10 sản phẩm) =====
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 32000000,
    category: "Smartphone",
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=400&h=400&fit=crop",
    description: "Flagship cao cấp từ Apple với chip A17 Pro",
    specs: {
      screen: "6.7 inch Super Retina XDR",
      ram: "8GB",
      storage: "256GB",
      camera: "Main 48MP + Ultra 12MP",
      battery: "4,685 mAh",
      os: "iOS 17"
    }
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: 30000000,
    category: "Smartphone",
    image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=400&h=400&fit=crop",
    description: "Điện thoại flagship Samsung với camera 200MP",
    specs: {
      screen: "6.8 inch Dynamic AMOLED 2X",
      ram: "12GB",
      storage: "512GB",
      camera: "Main 200MP + 50MP",
      battery: "5000 mAh",
      os: "Android 14"
    }
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    brand: "Google",
    price: 25000000,
    category: "Smartphone",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
    description: "Điện thoại Google với AI camera tốt nhất",
    specs: {
      screen: "6.7 inch OLED",
      ram: "12GB",
      storage: "256GB",
      camera: "Main 50MP + 48MP",
      battery: "5050 mAh",
      os: "Android 14"
    }
  },
  {
    id: 4,
    name: "Samsung Galaxy Z Fold 5",
    brand: "Samsung",
    price: 28000000,
    category: "Smartphone",
    image: "https://images.unsplash.com/photo-1519183254842-3e2e9e40e2d7?w=400&h=400&fit=crop",
    description: "Điện thoại gập cao cấp từ Samsung",
    specs: {
      screen: "7.6 inch Dynamic AMOLED",
      ram: "12GB",
      storage: "512GB",
      camera: "Main 50MP + Tele 10MP",
      battery: "4400 mAh",
      os: "Android 14"
    }
  },
  {
    id: 5,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 19000000,
    category: "Smartphone",
    image: "https://images.unsplash.com/photo-1606611013016-969c19d14444?w=400&h=400&fit=crop",
    description: "Điện thoại OnePlus với hiệu năng mạnh",
    specs: {
      screen: "6.7 inch AMOLED",
      ram: "12GB",
      storage: "256GB",
      camera: "Main 50MP + Ultra 48MP",
      battery: "5400 mAh",
      os: "Android 14"
    }
  },
  {
    id: 6,
    name: "Vivo X100",
    brand: "Vivo",
    price: 21000000,
    category: "Smartphone",
    image: "https://images.unsplash.com/photo-1606611013016-969c19d14444?w=400&h=400&fit=crop",
    description: "Điện thoại Vivo flagship",
    specs: {
      screen: "6.78 inch AMOLED",
      ram: "16GB",
      storage: "512GB",
      camera: "Main 50MP + 50MP",
      battery: "5400 mAh",
      os: "Android 14"
    }
  },
  {
    id: 7,
    name: "Xiaomi Redmi Note 13",
    brand: "Xiaomi",
    price: 9000000,
    category: "Smartphone",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf50b3e60?w=400&h=400&fit=crop",
    description: "Điện thoại Xiaomi giá rẻ tầm trung",
    specs: {
      screen: "6.67 inch AMOLED",
      ram: "8GB",
      storage: "256GB",
      camera: "Main 50MP + 8MP",
      battery: "5000 mAh",
      os: "Android 13"
    }
  },
  {
    id: 8,
    name: "iPhone 15 Plus",
    brand: "Apple",
    price: 26000000,
    category: "Smartphone",
    image: "https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=400&h=400&fit=crop",
    description: "iPhone lớn hơn với pin lâu hơn",
    specs: {
      screen: "6.7 inch Super Retina XDR",
      ram: "6GB",
      storage: "128GB",
      camera: "Main 48MP + Ultra 12MP",
      battery: "3582 mAh",
      os: "iOS 17"
    }
  },
  {
    id: 9,
    name: "Oppo Find X6 Pro",
    brand: "Oppo",
    price: 20000000,
    category: "Smartphone",
    image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=400&h=400&fit=crop",
    description: "Điện thoại Oppo với camera hasselblad",
    specs: {
      screen: "6.8 inch AMOLED",
      ram: "12GB",
      storage: "512GB",
      camera: "Main 50MP + Hasselblad",
      battery: "5000 mAh",
      os: "Android 14"
    }
  },
  {
    id: 10,
    name: "Motorola Edge 50 Ultra",
    brand: "Motorola",
    price: 18000000,
    category: "Smartphone",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
    description: "Điện thoại Motorola hiệu năng cao",
    specs: {
      screen: "6.9 inch AMOLED",
      ram: "12GB",
      storage: "512GB",
      camera: "Main 50MP + Tele 10MP",
      battery: "5000 mAh",
      os: "Android 14"
    }
  },

  // ===== TABLETS (5 sản phẩm) =====
  {
    id: 11,
    name: "iPad Pro 12.9",
    brand: "Apple",
    price: 28000000,
    category: "Tablet",
    image: "https://images.unsplash.com/photo-1552062407-291814eeca46?w=400&h=400&fit=crop",
    description: "Máy tính bảng Apple cao cấp nhất",
    specs: {
      screen: "12.9 inch Liquid Retina",
      ram: "8GB",
      storage: "256GB",
      processor: "Apple M2",
      battery: "10200 mAh",
      os: "iPadOS 17"
    }
  },
  {
    id: 12,
    name: "Samsung Galaxy Tab S10",
    brand: "Samsung",
    price: 22000000,
    category: "Tablet",
    image: "https://images.unsplash.com/photo-1585949450139-47cf1d63c78e?w=400&h=400&fit=crop",
    description: "Máy tính bảng Samsung cao cấp",
    specs: {
      screen: "14.6 inch Super AMOLED",
      ram: "12GB",
      storage: "256GB",
      processor: "Snapdragon 8 Gen 3",
      battery: "11200 mAh",
      os: "Android 14"
    }
  },
  {
    id: 13,
    name: "iPad Air 2024",
    brand: "Apple",
    price: 18000000,
    category: "Tablet",
    image: "https://images.unsplash.com/photo-1515873204952-40131917c997?w=400&h=400&fit=crop",
    description: "Máy tính bảng Apple mid-range",
    specs: {
      screen: "10.9 inch Liquid Retina",
      ram: "6GB",
      storage: "128GB",
      processor: "Apple M1",
      battery: "7606 mAh",
      os: "iPadOS 17"
    }
  },
  {
    id: 14,
    name: "Lenovo Tab P12 Pro",
    brand: "Lenovo",
    price: 16000000,
    category: "Tablet",
    image: "https://images.unsplash.com/photo-1603437902039-e2a2b7b23e00?w=400&h=400&fit=crop",
    description: "Máy tính bảng Lenovo chuyên nghiệp",
    specs: {
      screen: "12.6 inch OLED",
      ram: "12GB",
      storage: "256GB",
      processor: "Snapdragon 8 Gen 1",
      battery: "10200 mAh",
      os: "Android 13"
    }
  },
  {
    id: 15,
    name: "OnePlus Pad",
    brand: "OnePlus",
    price: 14000000,
    category: "Tablet",
    image: "https://images.unsplash.com/photo-1552062407-291814eeca46?w=400&h=400&fit=crop",
    description: "Máy tính bảng OnePlus giá rẻ",
    specs: {
      screen: "11.61 inch OLED",
      ram: "12GB",
      storage: "256GB",
      processor: "Snapdragon 8 Gen 1",
      battery: "9510 mAh",
      os: "Android 13"
    }
  },

  // ===== CAMERAS (6 sản phẩm) =====
  {
    id: 16,
    name: "Canon EOS R5",
    brand: "Canon",
    price: 85000000,
    category: "Camera",
    image: "https://images.unsplash.com/photo-1606933248051-5ce98adc6ecf?w=400&h=400&fit=crop",
    description: "Máy ảnh mirrorless full-frame cao cấp",
    specs: {
      sensor: "Full-frame 45MP",
      fps: "12 fps continuous",
      video: "8K RAW 60fps",
      autofocus: "AI autofocus",
      battery: "2500 mAh",
      weight: "738g"
    }
  },
  {
    id: 17,
    name: "Sony Alpha 7R V",
    brand: "Sony",
    price: 75000000,
    category: "Camera",
    image: "https://images.unsplash.com/photo-1606611012913-b8ec9a5b3d32?w=400&h=400&fit=crop",
    description: "Máy ảnh Sony với cảm biến 61MP",
    specs: {
      sensor: "Full-frame 61MP",
      fps: "10 fps continuous",
      video: "8K 25fps",
      autofocus: "693 autofocus points",
      battery: "2220 mAh",
      weight: "723g"
    }
  },
  {
    id: 18,
    name: "Nikon Z9",
    brand: "Nikon",
    price: 80000000,
    category: "Camera",
    image: "https://images.unsplash.com/photo-1606611013016-969c19d14444?w=400&h=400&fit=crop",
    description: "Máy ảnh Nikon professional",
    specs: {
      sensor: "Full-frame 45.7MP",
      fps: "20 fps continuous",
      video: "8K 60fps",
      autofocus: "Deep learning AF",
      battery: "2770 mAh",
      weight: "1340g"
    }
  },
  {
    id: 19,
    name: "Fujifilm X-T5",
    brand: "Fujifilm",
    price: 45000000,
    category: "Camera",
    image: "https://images.unsplash.com/photo-1606611012913-b8ec9a5b3d32?w=400&h=400&fit=crop",
    description: "Máy ảnh Fujifilm với kiểu dáng retro",
    specs: {
      sensor: "APS-C 40.2MP",
      fps: "11 fps continuous",
      video: "4K 60fps",
      autofocus: "425 autofocus points",
      battery: "1260 mAh",
      weight: "557g"
    }
  },
  {
    id: 20,
    name: "Panasonic Lumix S5II",
    brand: "Panasonic",
    price: 42000000,
    category: "Camera",
    image: "https://images.unsplash.com/photo-1606611013016-969c19d14444?w=400&h=400&fit=crop",
    description: "Máy ảnh Panasonic full-frame",
    specs: {
      sensor: "Full-frame 24.2MP",
      fps: "9 fps continuous",
      video: "5.9K UHD",
      autofocus: "225 autofocus points",
      battery: "1680 mAh",
      weight: "614g"
    }
  },
  {
    id: 21,
    name: "DJI Mavic 3 Pro",
    brand: "DJI",
    price: 28000000,
    category: "Camera",
    image: "https://images.unsplash.com/photo-1606611013016-969c19d14444?w=400&h=400&fit=crop",
    description: "Drone camera chuyên nghiệp",
    specs: {
      sensor: "Hasselblad 20MP",
      fps: "60 fps 4K",
      video: "5.1K RAW",
      flighttime: "46 minutes",
      battery: "5250 mAh",
      weight: "899g"
    }
  },

  // ===== LAPTOPS (6 sản phẩm) =====
  {
    id: 22,
    name: "MacBook Pro 16\" M3 Max",
    brand: "Apple",
    price: 75000000,
    category: "Laptop",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    description: "Laptop Apple cao cấp cho designer",
    specs: {
      processor: "Apple M3 Max",
      ram: "36GB",
      storage: "1TB SSD",
      screen: "16 inch Liquid Retina XDR",
      battery: "17 hours",
      weight: "2.15kg"
    }
  },
  {
    id: 23,
    name: "Dell XPS 15",
    brand: "Dell",
    price: 45000000,
    category: "Laptop",
    image: "https://images.unsplash.com/photo-1588872657840-790ff3a58ddc?w=400&h=400&fit=crop",
    description: "Laptop Dell XPS cao cấp",
    specs: {
      processor: "Intel Core i9",
      ram: "32GB",
      storage: "1TB SSD",
      screen: "15.6 inch OLED",
      battery: "12 hours",
      weight: "1.99kg"
    }
  },
  {
    id: 24,
    name: "ASUS ZenBook 14 OLED",
    brand: "ASUS",
    price: 32000000,
    category: "Laptop",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    description: "Laptop ASUS nhẹ và mạnh",
    specs: {
      processor: "AMD Ryzen 7",
      ram: "16GB",
      storage: "512GB SSD",
      screen: "14 inch OLED",
      battery: "13 hours",
      weight: "1.25kg"
    }
  },
  {
    id: 25,
    name: "Lenovo ThinkPad X1 Carbon",
    brand: "Lenovo",
    price: 38000000,
    category: "Laptop",
    image: "https://images.unsplash.com/photo-1588872657840-790ff3a58ddc?w=400&h=400&fit=crop",
    description: "Laptop business Lenovo đáng tin cậy",
    specs: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      screen: "14 inch IPS",
      battery: "15 hours",
      weight: "1.09kg"
    }
  },
  {
    id: 26,
    name: "HP Spectre x360 16",
    brand: "HP",
    price: 42000000,
    category: "Laptop",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    description: "Laptop HP 2-in-1 cao cấp",
    specs: {
      processor: "Intel Core i9",
      ram: "32GB",
      storage: "1TB SSD",
      screen: "16 inch OLED touchscreen",
      battery: "14 hours",
      weight: "1.98kg"
    }
  },
  {
    id: 27,
    name: "Microsoft Surface Laptop Studio",
    brand: "Microsoft",
    price: 48000000,
    category: "Laptop",
    image: "https://images.unsplash.com/photo-1588872657840-790ff3a58ddc?w=400&h=400&fit=crop",
    description: "Laptop Microsoft cho creators",
    specs: {
      processor: "Intel Core i7",
      ram: "32GB",
      storage: "1TB SSD",
      screen: "15 inch PixelSense touchscreen",
      battery: "11 hours",
      weight: "1.99kg"
    }
  }
];

// Get all products
function getAllProducts() {
  return PRODUCTS;
}

// Get product by ID
function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

// Get unique brands
function getBrands() {
  return [...new Set(PRODUCTS.map(p => p.brand))].sort();
}

// Get unique categories
function getCategories() {
  return [...new Set(PRODUCTS.map(p => p.category))].sort();
}

// Search products
function searchProducts(query) {
  const lowerQuery = query.toLowerCase();
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.brand.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery)
  );
}

// Filter products
function filterProducts(filters) {
  let result = PRODUCTS;

  if (filters.brand && filters.brand.length > 0) {
    result = result.filter(p => filters.brand.includes(p.brand));
  }

  if (filters.category && filters.category.length > 0) {
    result = result.filter(p => filters.category.includes(p.category));
  }

  if (filters.minPrice !== undefined && filters.minPrice > 0) {
    result = result.filter(p => p.price >= filters.minPrice);
  }

  if (filters.maxPrice !== undefined && filters.maxPrice > 0) {
    result = result.filter(p => p.price <= filters.maxPrice);
  }

  return result;
}

// Sort products
function sortProducts(products, sortBy) {
  const sorted = [...products];
  switch (sortBy) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'name-asc':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }
  return sorted;
}

// Format price to VND
function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
  }).format(price);
}
