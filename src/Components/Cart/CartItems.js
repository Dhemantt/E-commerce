import React from "react";
import CartItem from "./CartItem";
import style from "./CartItems.module.css";

const CartItems = ({cartItems}) => {

  const cartItemsListUI =
    cartItems &&
    cartItems.map((item) => {
      return <CartItem item={item} key={item.id} />;
    });

  return <ul className={style.cartItems}>{cartItemsListUI}</ul>;
};

export default CartItems;
