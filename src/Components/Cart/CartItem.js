import React, { useContext } from "react";
import style from "./CartItem.module.css";
import { CartContext } from "../../Store/CartContext";
const CartItem = ({ item }) => {
 
  const { image, name, price, id } = item;
  const { delItem, amountChangeHandler } = useContext(CartContext);
  
  const handleAmtChange = (e) => {
  
    amountChangeHandler(e.target.value, id);
  };

  return (
    <div className={style.cartItem} key={id}>
      <div className={style.itemInfo}>
        <img src={image} alt="some thing" />
        <h4> {name}</h4>
      </div>

      <div className={style.price}>
        <i className="fa-solid fa-indian-rupee-sign"></i> {price}
      </div>

      <div className={style.quantity}>
        <label
          htmlFor="qty"
          style={{ fontSize: "0.722rem", marginRight: "1rem" }}
        >
          Quantity
        </label>
        <input
          type="number"
          id="qty"
          min="1"
          max="10"
          value={item.amount}
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
