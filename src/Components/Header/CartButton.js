import React, { useEffect, useContext, useState } from "react";
import style from "./CartButton.module.css";
import { ShowCartContext } from "../../Store/ShowCartContext";
import { CartContext } from "../../Store/CartContext";
const CartButton = () => {
  const { cartItems } = useContext(CartContext);
  const { toggleCart } = useContext(ShowCartContext);
  
  return (
    <button className={style.cartButton} onClick={toggleCart}>
      Your Cart <span className={style.cartBadge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
