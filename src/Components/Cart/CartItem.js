import React, { useState, useEffect, useContext, useCallback } from "react";
import style from "./CartItem.module.css";
import { CartContext } from "../../Store/CartContext";
const CartItem = ({ item }) => {
  const { imageUrl, title, price, id } = item;

  const { delItem, amountChangeHandler } = useContext(CartContext);


  const handleAmtChange = (e) => {
    amountChangeHandler(e.target.value, id);
  };

  return (
    <div className={style.cartItem} key={id}>
      <div className={style.itemInfo}>
        <img src={imageUrl} alt="some thing" />
        <h4> {title}</h4>
      </div>

      <div className={style.price}>Rs {price}</div>

      <div className={style.quantity}>
        <input
          type="number"
          id="qty"
          min="1"
          max="10"
          defaultValue='1'
          onChange={handleAmtChange}
        />
      </div>

      <div className={style.actions}>
        <button className={style.btnDeleteItem} onClick={() => delItem(id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
