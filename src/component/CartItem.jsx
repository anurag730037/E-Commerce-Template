import React from "react";
import "./cartItem.css";
import { useSelector, useDispatch } from "react-redux";
import { quantityUpdate, removeItem } from "../ReduxStore/cartSlice";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart-item">
        <img src={item.image} alt={item.title} />

        <div className="details">
          <h3 className="item-title">{item.title}</h3>

          <p className="item-price">₹ {item.price}</p>
          <span className="rating">⭐ {item.rating.rate} / 5</span>
          <div className="detail-bottom">
            <div className="quantity">
              <button
                disabled={item.quantity === 1}
                onClick={() =>
                  dispatch(
                    quantityUpdate({ id: item.id, quantity: item.quantity - 1 })
                  )
                }
              >
                ➖
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() =>
                  dispatch(
                    quantityUpdate({ id: item.id, quantity: item.quantity + 1 })
                  )
                }
              >
                ➕
              </button>
            </div>
            <div>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="remove-btn"
              >
                ❌ Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
