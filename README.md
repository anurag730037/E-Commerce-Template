# E-Commerce Template  

## Overview
This is a simple E-Commerce template built with **React, Redux Toolkit, React Router DOM, and custom CSS**.

## Features
- Fetches products from API (https://fakestoreapi.com/products).
- Add to Cart functionality with Redux Toolkit.
- Cartpage with quantity control and product removal feature.
- Fully responsive UI.
- Navigation between pages using React Router DOM.

## 📌 Pages
This project has two main pages:
- **Home Page (`pages/Home.jsx`)** – Displays a list of all products fetched from the API.
- **Cart Page (`pages/CartPage.jsx`)** – Displays all items added to the cart, with options to increase/decrease quantity and remove items.

## 🛠️ Technology Used
- React.js
- Redux Toolkit
- React Router DOM
- JavaScript
- Custom CSS

## 🎨 Styling (Custom CSS)
This project uses **Custom CSS** for styling. The styling structure is as follows:

- **`src/App.css`** – Contains styles for `pages/Home.jsx` , `pages/CartPage.jsx` and general layout.
- **Component-specific CSS files** (each component has a separate CSS file inside the `src/component/` folder):
  - `src/component/cartItem.css` → Styles for `CartItem.jsx`
  - `src/component/navbar.css` → Styles for `Navbar.jsx`
  - `src/component/productCard.css` → Styles for `ProductCard.jsx`

## 🚀 How to Run Locally

1. Clone the Repository  
   ```sh
   git clone https://github.com/anurag730037/E-Commerce-Template.git
   cd E-Commerce-Template
   ```

2. Install Dependencies  
   ```sh
   npm install
   ```

3. Start the Development Server  
   ```sh
   npm run dev
   ```

4. Open in Browser  
   Once the server is running, open your browser and go to localhost.
   ```
