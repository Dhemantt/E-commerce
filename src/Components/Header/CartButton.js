import React from "react";
import style from "./CartButton.module.css";
import { useContext } from "react";
import { ShowCartContext } from "../../Store/ShowCartContext";
const CartButton = () => {
  const { toggleCart } = useContext(ShowCartContext);

  return (
    <button className={style.cartButton} onClick={toggleCart}>
      Your Cart <span className={style.cartBadge}>1</span>
    </button>
  );
};

export default CartButton;
