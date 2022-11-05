import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Store/CartContext";
import style from "./Product.module.css";
const ProductDetails = ({ item }) => {
  const { cartItems, addItem } = useContext(CartContext);

  const [addCartClicked, setAddCartClicked] = useState(false);

  const { title, price, imageUrl, id } = item;

  useEffect(() => {
    let item = cartItems.find((item) => item.id === id);
    item ? setAddCartClicked(true) : setAddCartClicked(false);
  }, [cartItems, id]);

  return (
    <li key={id}>
      <h3>{title}</h3>
      <div>
        <img src={imageUrl} alt="product" />
      </div>

      <div className={style.flexcontainer}>
        <div>Rs. {price}</div>
        <button
          disabled={!addCartClicked ? false : true}
          className={
            !addCartClicked
              ? style.addToCartBtn
              : `${style.disabled} ${style.addToCartBtn}`
          }
          onClick={() => {
            // setAddCartClicked(true);
            addItem({ ...item, amount: 1 });
          }}
        >
          {!addCartClicked ? (
            <span>Add to cart </span>
          ) : (
            <span>Product Added</span>
          )}
          <span>
            <i className="fa-solid fa-cart-plus"></i>
          </span>
        </button>
      </div>
    </li>
  );
};

export default ProductDetails;
