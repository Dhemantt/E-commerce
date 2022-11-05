import React, { useContext } from "react";
import style from "./Cart.module.css";
import CartItems from "./CartItems";
import { ShowCartContext } from "../../Store/ShowCartContext";

const Cart = () => {
  const { showCart, toggleCart } = useContext(ShowCartContext);
  console.log(showCart);

  return (
    <>
      {showCart && (
        <div className={style.cart}>
          <h2>Your cart</h2>
          <CartItems />
        </div>
      )}
    </>
  );
};

export default Cart;
