// Shopping cart logic with localStorage
const CART_KEY = 'shopping_cart';

class ShoppingCart {
  constructor() {
    this.items = this.loadCart();
  }

  // Load cart from localStorage
  loadCart() {
    const savedCart = localStorage.getItem(CART_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  }

  // Save cart to localStorage
  saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(this.items));
  }

  // Add product to cart
  addProduct(product, quantity = 1) {
    quantity = parseInt(quantity);
    if (quantity < 1) quantity = 1;

    const existingItem = this.items.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        brand: product.brand,
        quantity: quantity
      });
    }

    this.saveCart();
    this.notifyUpdate();
  }

  // Remove product from cart
  removeProduct(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.saveCart();
    this.notifyUpdate();
  }

  // Update product quantity
  updateQuantity(productId, quantity) {
    quantity = parseInt(quantity);
    if (quantity < 1) {
      this.removeProduct(productId);
      return;
    }

    const item = this.items.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      this.saveCart();
      this.notifyUpdate();
    }
  }

  // Clear all items
  clearCart() {
    this.items = [];
    this.saveCart();
    this.notifyUpdate();
  }

  // Get total items
  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // Get total price
  getTotalPrice() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // Get cart items
  getItems() {
    return [...this.items];
  }

  // Check if product is in cart
  hasProduct(productId) {
    return this.items.some(item => item.id === productId);
  }

  // Notify cart update (for UI updates)
  notifyUpdate() {
    const event = new CustomEvent('cartUpdated', {
      detail: {
        totalItems: this.getTotalItems(),
        totalPrice: this.getTotalPrice(),
        items: this.items
      }
    });
    document.dispatchEvent(event);
  }
}

// Create global cart instance
const cart = new ShoppingCart();

// Update cart badge on page load
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
});

// Listen to cart updates
document.addEventListener('cartUpdated', () => {
  updateCartBadge();
});

// Update cart badge function
function updateCartBadge() {
  const badge = document.querySelector('.cart-count');
  if (badge) {
    const count = cart.getTotalItems();
    badge.textContent = count > 0 ? count : '';
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}
