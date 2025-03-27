import { createSlice } from "@reduxjs/toolkit";
import CartItem from "../component/CartItem";

const initialState = {
  ProductList: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const isExisting = state.ProductList.find(
        (item) => item.id === action.payload.id
      );

      if (isExisting) {
        isExisting.quantity += 1;
      } else {
        state.ProductList.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.ProductList));
    },
    removeItem: (state, action) => {
      state.ProductList = state.ProductList.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.ProductList));
    },
    quantityUpdate: (state, action) => {
      const item = state.ProductList.find(
        (item) => item.id === action.payload.id
      );
      if (item && action.payload.quantity > 0) {
        item.quantity = action.payload.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.ProductList));
    },
  },
});

export const { addtocart, removeItem, quantityUpdate } = cartSlice.actions;
export default cartSlice.reducer;
