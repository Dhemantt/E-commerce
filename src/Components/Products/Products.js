import React from "react";
import style from "./Products.module.css";
import ProductDetails from "./ProductDetails";
const Products = ({ productsList }) => {
  const productsListUI = productsList.map((item) => {
    return <ProductDetails item={item} key={item.id} />;
  });

  return (
    <>
      <h1 style={{ marginTop: "20px" }}>Albums</h1>
      <ul className={style.productsContainer}>{productsListUI}</ul>
    </>
  );
};

export default Products;
