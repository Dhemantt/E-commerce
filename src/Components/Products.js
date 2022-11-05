import React from "react";
import style from "./Products.module.css";
const Products = ({ productsList }) => {
  console.log(productsList);
  const productsListUI = productsList.map((item) => {
    const { title, price, imageUrl } = item;
    return (
      <li key={new Date().getTime() + Math.random()}>
        <h3>{title}</h3>
        <div>
          <img src={imageUrl} alt="product" />
        </div>

        <div className={style.flexcontainer}>
          <div>Rs. {price}</div>
          <button className={style.addToCartBtn}>Add</button>
        </div>
      </li>
    );
  });

  return (
    <>
      <h1>Albums</h1>
      <ul className={style.productsContainer}>{productsListUI}</ul>
    </>
  );
};

export default Products;
