import React from "react";
import { useDispatch } from "react-redux";
import "./productCard.css";
import { addtocart } from "../ReduxStore/cartSlice";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="prod_card">
      <img src={product.image} alt={product.title} />

      <hr />

      <h3 className="prod_title" title={product.title}>
        {product.title}
      </h3>
      <p className="desc"> {product.description}</p>
      <p className="prod_price">₹{product.price}</p>
      <div className="product-rating">
        <span className="rating">⭐ {product.rating.rate} / 5</span>

        <span className="rating-count">{product.rating.count} reviews</span>
      </div>
      <button
        onClick={() => dispatch(addtocart(product))}
        className="add-to-cart-btn"
        aria-label={`Add ${product.title} to cart`}
      >
        Add to Cart <FaCartPlus />
      </button>
    </div>
  );
};

export default ProductCard;
