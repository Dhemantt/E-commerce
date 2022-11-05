import React from "react";
export const CartContext = React.createContext({
  cartItems: [],
  totalAmount: 0,
  addItem: (item) => {},
  delItem: () => {},
  reduceQuantity: () => {},
});
