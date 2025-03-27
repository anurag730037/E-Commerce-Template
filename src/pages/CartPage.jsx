import React from "react";
import Navbar from "../component/Navbar";
import CartItem from "../component/CartItem";
import { useSelector, useDispatch } from "react-redux";

const CartPage = () => {
  const productList = useSelector((state) => state.cart.ProductList);

  const total = productList.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <>
      <Navbar />
      <div className="card-page">
        {productList.length === 0 ? (
          <h2 className="empty-cart">Your cart is empty!</h2>
        ) : (
          <div className="cart-items">
            {productList.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        )}
        <div className="cart-total">
          <h3>Total: ₹{total}</h3>
          <button
            className="checkout-btn"
            onClick={() => {
              alert("Thank you for Shopping 😌");
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
