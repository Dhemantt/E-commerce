import React from "react";
import style from "./CartItems.module.css";
const CartItems = () => {
  return (
    <div className={style.cartItems}>
      
      <div className={style.itemInfo}>
        <img
          src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
          alt="product-1"
        />
        <h4> Item name</h4>
      </div>
      
      <div className={style.price}>Rs 1999</div>
      
      <div className={style.quantity}>
        <input type="number" id="qty" min="1" max="10" />
      </div>

      <div className={style.actions}>
      <button className={style.btnDeleteItem}>
        <i className="fa-solid fa-trash"></i>
      </button>

      <button className={style.btnIncrementItem}>
        <i className="fa-solid fa-minus"></i>
      </button>

      <button className={style.btnDecrementItem}>
        <i className="fa-solid fa-plus"></i>
      </button>
      </div>
    </div>
  );
};

export default CartItems;
