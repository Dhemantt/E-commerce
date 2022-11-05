import React, { useContext } from "react";
import style from "./Cart.module.css";
import CartItems from "./CartItems";
import { ShowCartContext } from "../../Store/ShowCartContext";
import { CartContext } from "../../Store/CartContext";
const Cart = () => {
  const { showCart, toggleCart } = useContext(ShowCartContext);
  const { cartItems, totalAmount } = useContext(CartContext);

  return (
    <>
      {showCart && (
        <div className={style.cart}>
          <button className={style.closeCartBtn} onClick={() => toggleCart()}>
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
          {cartItems.length === 0 ? (
            <h2 style={{ padding: "20px" }}> Your cart is empty</h2>
          ) : (
            <>
              <div className={style.cartTotal}>
                <h2>Cart Total</h2>
                <h2>Rs {totalAmount}</h2>
              </div>
              <CartItems cartItems={cartItems} />
              <button className={style.orderBtn}>Order now</button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
