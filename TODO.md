# TODO: Update Cart Items Styling to Match Homepage ProductCard

## Task
Make cart items display with the same border and styling as the homepage product cards.

## Plan

### 1. Update Cart.css
- Change `.cart-item-display` to match `.product-card` styling:
  - Width: 220px (same as product-card)
  - Border: 3px solid #ddd
  - Padding: 20px
  - Border-radius: 8px
  - Background: white
  - Box-shadow: 0 2px 5px rgba(0,0,0,0.1)
  - Margin-bottom: 20px

- Update `.cart-item-image` to match product-card img:
  - Width: 100%
  - Height: 160px
  - Object-fit: contain
  - Border: 3px solid #ddd
  - Border-radius: 8px
  - Margin-bottom: 15px

- Update `.cart-item-info` text styling to match:
  - h3 style for name (margin-bottom: 10px, color: #333)
  - p style for price (color: #333)

### 2. Update Cart.jsx (if needed)
- Update structure to match ProductCard if necessary

## Files to Edit
- src/components/cart/Cart.css
- src/components/cart/Cart.jsx (if needed)

