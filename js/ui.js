// UI Utilities

// Display products - Modern CellphoneS Style
function displayProductsModern(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = '<div class="empty-cart"><p>Không tìm thấy sản phẩm nào</p></div>';
    return;
  }

  container.innerHTML = products.map(product => `
    <a href="product-detail.html?id=${product.id}" class="product-item">
      <div class="product-image-wrapper">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <span class="product-badge">MỚI</span>
      </div>
      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-specs">
          ${Object.entries(product.specs || {}).slice(0, 2).map(([key, value]) => `
            <div class="product-specs-item">
              <span>${key}:</span>
              <span>${value}</span>
            </div>
          `).join('')}
        </div>
        <div class="product-price-section">
          <div class="product-price">${formatPrice(product.price)}</div>
          <div style="font-size: 0.85rem; color: #999; margin-bottom: 0.5rem;">
            <span class="product-original-price">${formatPrice(Math.round(product.price * 1.1))}</span>
            <span class="product-discount">-9%</span>
          </div>
          <div class="product-actions">
            <button onclick="event.preventDefault(); addToCartFromCard(${product.id})">Thêm vào giỏ</button>
            <button onclick="event.preventDefault()">So sánh</button>
          </div>
        </div>
      </div>
    </a>
  `).join('');
}

// Display products on page
function displayProducts(products, containerId) {
  displayProductsModern(products, containerId);
}

// Add to cart from product card
function addToCartFromCard(productId) {
  const product = getProductById(productId);
  if (product) {
    cart.addProduct(product, 1);
    showNotification(`Đã thêm ${product.name} vào giỏ hàng`);
  }
}

// Go to product detail page
function goToProductDetail(productId) {
  window.location.href = `product-detail.html?id=${productId}`;
}

// Display product detail
function displayProductDetail(productId) {
  const product = getProductById(productId);
  if (!product) {
    document.body.innerHTML = '<div class="container"><h1>Sản phẩm không tìm thấy</h1></div>';
    return;
  }

  const detailContainer = document.getElementById('productDetail');
  if (!detailContainer) return;

  const specsHtml = Object.entries(product.specs || {})
    .map(([key, value]) => `
      <div class="spec-item">
        <strong>${key}:</strong>
        <span>${value}</span>
      </div>
    `)
    .join('');

  detailContainer.innerHTML = `
    <div class="product-detail-container">
      <div>
        <img src="${product.image}" alt="${product.name}" class="product-detail-image">
      </div>
      <div class="product-detail-info">
        <span class="product-detail-brand">${product.brand}</span>
        <h1 class="product-detail-name">${product.name}</h1>
        <p class="product-detail-price">${formatPrice(product.price)}</p>
        
        <div class="product-detail-specs">
          ${specsHtml}
        </div>
        
        <p class="product-detail-description">${product.description}</p>
        
        <div class="quantity-section">
          <label for="quantity">Số lượng:</label>
          <input type="number" id="quantity" value="1" min="1" max="10">
        </div>
        
        <div class="detail-actions">
          <button class="btn btn-primary" onclick="addDetailToCart(${product.id})">
            Thêm vào giỏ hàng
          </button>
          <button class="btn btn-secondary" onclick="window.history.back()">
            Quay lại
          </button>
        </div>
      </div>
    </div>
  `;
}

// Add to cart from detail page
function addDetailToCart(productId) {
  const quantity = parseInt(document.getElementById('quantity').value) || 1;
  const product = getProductById(productId);
  if (product) {
    cart.addProduct(product, quantity);
    showNotification(`Đã thêm ${quantity} chiếc ${product.name} vào giỏ hàng`);
    document.getElementById('quantity').value = 1;
  }
}

// Display cart items
function displayCartItems() {
  const container = document.getElementById('cartItems');
  if (!container) return;

  const items = cart.getItems();

  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <p>Giỏ hàng của bạn trống</p>
        <a href="index.html" class="btn btn-primary">Tiếp tục mua sắm</a>
      </div>
    `;
    document.getElementById('cartSummary').style.display = 'none';
    return;
  }

  document.getElementById('cartSummary').style.display = 'block';
  container.innerHTML = items.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>${item.brand}</p>
        <p class="cart-item-price">${formatPrice(item.price)}</p>
      </div>
      <div class="quantity-control">
        <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
        <input type="number" value="${item.quantity}" onchange="updateCartQuantity(${item.id}, this.value)" readonly>
        <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
      </div>
      <div>
        <p><strong>${formatPrice(item.price * item.quantity)}</strong></p>
        <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Xóa</button>
      </div>
    </div>
  `).join('');

  updateCartSummary();
}

// Update cart summary
function updateCartSummary() {
  const totalItems = cart.getTotalItems();
  const totalPrice = cart.getTotalPrice();
  const subtotal = totalPrice;
  const shipping = totalPrice > 0 ? 50000 : 0;
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + shipping + tax;

  const summaryContainer = document.getElementById('cartSummary');
  if (summaryContainer) {
    summaryContainer.innerHTML = `
      <div class="cart-summary">
        <h3>Tóm tắt đơn hàng</h3>
        <div class="summary-row">
          <span>Tạm tính (${totalItems} sản phẩm):</span>
          <span>${formatPrice(subtotal)}</span>
        </div>
        <div class="summary-row">
          <span>Thuế (10%):</span>
          <span>${formatPrice(tax)}</span>
        </div>
        <div class="summary-row">
          <span>Phí vận chuyển:</span>
          <span>${formatPrice(shipping)}</span>
        </div>
        <div class="summary-row total">
          <span>Tổng cộng:</span>
          <span>${formatPrice(total)}</span>
        </div>
        <div class="cart-actions">
          <button class="btn btn-primary" onclick="checkout()">Thanh toán</button>
          <button class="btn btn-secondary" onclick="continueShopping()">Tiếp tục mua sắm</button>
          <button class="btn btn-danger" onclick="clearCartConfirm()">Xóa giỏ hàng</button>
        </div>
      </div>
    `;
  }
}

// Update cart quantity
function updateCartQuantity(productId, quantity) {
  const q = parseInt(quantity);
  if (q <= 0) {
    removeFromCart(productId);
  } else {
    cart.updateQuantity(productId, q);
    displayCartItems();
  }
}

// Remove from cart
function removeFromCart(productId) {
  cart.removeProduct(productId);
  displayCartItems();
  showNotification('Đã xóa sản phẩm khỏi giỏ hàng');
}

// Clear cart
function clearCartConfirm() {
  if (confirm('Bạn chắc chắn muốn xóa toàn bộ giỏ hàng?')) {
    cart.clearCart();
    displayCartItems();
  }
}

// Checkout
function checkout() {
  const total = cart.getTotalPrice();
  if (total > 0) {
    alert(`Cảm ơn bạn! Tổng đơn hàng: ${formatPrice(total)}\n\nĐây là demo, không có thanh toán thực tế.`);
    cart.clearCart();
    displayCartItems();
  }
}

// Continue shopping
function continueShopping() {
  window.location.href = 'index.html';
}

// Show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: var(--success-color);
    color: white;
    padding: 15px 20px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-lg);
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
}

// Setup search and filter
function setupSearchFilter() {
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  const filterBtn = document.getElementById('filterBtn');
  const sortSelect = document.getElementById('sortBy');

  if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
  }

  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') performSearch();
    });
  }

  if (filterBtn) {
    filterBtn.addEventListener('click', performFilter);
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', performSort);
  }
}

// Perform search
function performSearch() {
  const query = document.getElementById('searchInput')?.value || '';
  let results;

  if (query.trim()) {
    results = searchProducts(query);
  } else {
    results = getAllProducts();
  }

  results = applyCurrentFilters(results);
  const sortBy = document.getElementById('sortBy')?.value || '';
  if (sortBy) {
    results = sortProducts(results, sortBy);
  }

  displayProducts(results, 'productsContainer');
}

// Perform filter
function performFilter() {
  const filters = {
    brand: Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(cb => cb.value),
    category: Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value),
    minPrice: parseInt(document.getElementById('minPrice')?.value || 0),
    maxPrice: parseInt(document.getElementById('maxPrice')?.value || 0)
  };

  let results = filterProducts(filters);
  const query = document.getElementById('searchInput')?.value || '';
  if (query.trim()) {
    results = results.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.brand.toLowerCase().includes(query.toLowerCase())
    );
  }

  const sortBy = document.getElementById('sortBy')?.value || '';
  if (sortBy) {
    results = sortProducts(results, sortBy);
  }

  displayProducts(results, 'productsContainer');
}

// Perform sort
function performSort() {
  performFilter();
}

// Apply current filters
function applyCurrentFilters(products) {
  const filters = {
    brand: Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(cb => cb.value),
    category: Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value),
    minPrice: parseInt(document.getElementById('minPrice')?.value || 0),
    maxPrice: parseInt(document.getElementById('maxPrice')?.value || 0)
  };

  return filterProducts(filters);
}

// Setup filter UI
function setupFilterUI() {
  const filterContainer = document.getElementById('filterContainer');
  if (!filterContainer) return;

  const brands = getBrands();
  const categories = getCategories();

  let html = `
    <div class="search-filter">
      <h3>🔍 Tìm kiếm & Lọc</h3>
      
      <div class="filter-row" style="margin-bottom: 1rem;">
        <button class="btn btn-primary" id="filterBtn" style="width: 100%;">
          🔎 Áp dụng bộ lọc
        </button>
      </div>

      <div class="filter-row">
        <div class="filter-group" style="grid-column: 1 / -1; margin-bottom: 0.5rem;">
          <label>Tìm kiếm:</label>
          <input type="text" id="searchInput" placeholder="Tên sản phẩm...">
        </div>
      </div>

      <div class="filter-row">
        <div class="filter-group" style="margin-bottom: 0;">
          <label>Giá min:</label>
          <input type="number" id="minPrice" placeholder="0">
        </div>
        <div class="filter-group" style="margin-bottom: 0;">
          <label>Giá max:</label>
          <input type="number" id="maxPrice" placeholder="999M">
        </div>
        <div class="filter-group" style="margin-bottom: 0;">
          <label>Sắp xếp:</label>
          <select id="sortBy">
            <option value="">-- Chọn --</option>
            <option value="price-asc">Giá ↑</option>
            <option value="price-desc">Giá ↓</option>
            <option value="name-asc">A-Z</option>
            <option value="name-desc">Z-A</option>
          </select>
        </div>
      </div>

      <div class="filter-row">
        <div class="filter-group">
          <label>🏢 Thương hiệu:</label>
          ${brands.map(brand => `
            <label style="display: flex; align-items: center; gap: 6px; margin-bottom: 5px; font-size: 0.9rem;">
              <input type="checkbox" name="brand" value="${brand}"> ${brand}
            </label>
          `).join('')}
        </div>
      </div>

      <div class="filter-row">
        <div class="filter-group">
          <label>📱 Danh mục:</label>
          ${categories.map(category => `
            <label style="display: flex; align-items: center; gap: 6px; margin-bottom: 5px; font-size: 0.9rem;">
              <input type="checkbox" name="category" value="${category}"> ${category}
            </label>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  filterContainer.innerHTML = html;
  setupSearchFilter();
}

// Filter products by category from navbar
function filterByCategory(category) {
  const checkboxes = document.querySelectorAll('input[name="category"]');
  checkboxes.forEach(cb => {
    cb.checked = cb.value === category;
  });
  performFilter();
  document.querySelector('.main-container')?.scrollIntoView({ behavior: 'smooth' });
}

// Initialize page
function initializePage() {
  setupFilterUI();
  const allProducts = getAllProducts();
  displayProducts(allProducts, 'productsContainer');
  updateCartBadge();
}

// Update cart badge
function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  const count = cart.getTotalItems();
  if (badge) {
    if (count > 0) {
      badge.textContent = count;
      badge.style.display = 'block';
    } else {
      badge.style.display = 'none';
    }
  }
}

// Animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);
