import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";

const Navbar = () => {
  const productscount = useSelector((state) => state.cart.ProductList.length);

  return (
    <nav>
      <div className="nav-content">
        <div className="logo">
          <Link to="/">
            <FaShopify />
            Shop
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/">
            <FaHome />
            Home
          </Link>
          <Link to="/cart">
            <FaCartShopping />
            Cart ({productscount})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
