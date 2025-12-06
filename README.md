# 🛒 React E-Commerce Application (NxtTrendz Clone)

A full-featured e-commerce frontend built using **React**, demonstrating real-world concepts such as authentication, product listing, filtering, protected routes, product details, cart management, and responsive UI design.

This project showcases production-style frontend architecture with reusable components, API integration, routing, and state management techniques.

---

## 🚀 Live Demo  
(Deploy link will be added soon)

---

## ✨ Features Overview

### 🔐 **Authentication**
- Login page (`LoginForm`)
- JWT token handling
- `ProtectedRoute` implementation
- Redirect for authenticated users

---

### 🛍️ **Products Module**
- Product listing (`Products`)
- Sorting & filtering (`FiltersGroup`)
- Category filters
- Rating filters
- Search functionality
- Pagination & limit
- Products header (`ProductsHeader`)
- Product card component (`ProductCard`)
- Prime-exclusive deals (`PrimeDealsSection`)

---

### 🔎 **Product Details Page**
Handled by `ProductItemDetails` with:
- Large product preview image
- Title, brand, rating & reviews
- Price
- Product description
- Quantity increment/decrement
- Add to Cart button
- Similar products (`SimilarProductItem`)
- API success / failure / loading views

---

### 🛒 **Cart Management**
Component: `Cart`

- Add products
- Remove products
- Update quantity
- Total price calculation
- Cart persistence (UI-level)
- Empty cart and success states

---

### 🏠 **Other Pages**
- Home page (`Home`)
- Not Found page (`NotFound`)
- Header with nav links (`Header`)

---

## 🧰 Tech Stack

- **React**
- **React Router**
- **JavaScript (ES6+)**
- **CSS (Responsive UI)**
- **Fetch API**
- **LocalStorage** for auth persistence

---

## 📁 Project Structure

```bash
src/
├── components/
│   ├── AllProductsSection/
│   ├── Cart/
│   ├── FiltersGroup/
│   ├── Header/
│   ├── Home/
│   ├── LoginForm/
│   ├── NotFound/
│   ├── PrimeDealsSection/
│   ├── ProductCard/
│   ├── ProductItemDetails/
│   ├── Products/
│   ├── ProductsHeader/
│   ├── ProtectedRoute/
│   └── SimilarProductItem/
│
├── App.js
├── App.css
├── index.js
└── setupTests.js
