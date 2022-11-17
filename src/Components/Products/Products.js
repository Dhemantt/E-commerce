import React, { useEffect, useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./Products.module.css";
import { AuthContext } from "../../Store/AuthContext";

const Products = () => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        "https://generics-store-default-rtdb.firebaseio.com/products.json",
        {
          mode: "cors",
          method: "get",
        }
      );
      const products = await res.json();
      let productListArray = [];
      for (const [key, value] of Object.entries(products)) {
        productListArray.push({ ...value, prodId: key });
      }
      setProductList(productListArray);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!token) {
      //redirect to products page
      navigate("/login");
    }
    // console.log(token);

    fetchProducts();
  }, []);

  return (
    <>
      <div className={style.productsOuterContainer}>
        <div className={style.productsInnerContainer}>
          {productList.length > 0 &&
            productList.map((product) => {
              return (
                <div key={product.prodId} className={style.productContainer}>
                  <div className={style.productImageContainer}>
                    <img
                      className={style.productImage}
                      src={product.image}
                      alt={`product ${product.pIsd}`}
                    ></img>
                  </div>
                  <div className={style.productData}>
                    <h1 className={style.productName}>{product.name}</h1>
                    <h3 className={style.productPrice}>
                      <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                      {product.price}
                    </h3>

                    <NavLink className={style.btnView} to={`${product.prodId}`}>
                      View details
                    </NavLink>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Products;
