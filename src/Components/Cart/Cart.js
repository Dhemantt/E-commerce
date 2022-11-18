import React, { useContext, useEffect } from "react";
import style from "./Cart.module.css";
import CartItems from "./CartItems";
import { CartContext } from "../../Store/CartContext";

const Cart = () => {
  const { cartItems, totalAmount } = useContext(CartContext);

  return (
    <>
      <div className={style.cart}>
        {cartItems.length === 0 ? (
          <h2
            style={{
              padding: "0.5rem 1.22rem",
              minWidth: "400px",
              color: "grey",
              fontSize: "50px",
              textAlign: "center",
            }}
          >
            Your cart is empty
          </h2>
        ) : (
          <>
            <div className={style.cartTotal}>
              <h2>Cart Total</h2>
              <h2>
                {" "}
                <i className="fa-solid fa-indian-rupee-sign"></i> {totalAmount}
              </h2>
            </div>
            <CartItems cartItems={cartItems} />
            <button className={style.orderBtn}>Order now</button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
