import React, { useState, useEffect, useContext } from "react";
import style from "./ProductDetails.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { CartContext } from "../../Store/CartContext";
import { AuthContext } from "../../Store/AuthContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);
  const { token, isLoggedIn } = useContext(AuthContext);
  const { pId: productId } = useParams();
  const [prodDetails, setProdDetails] = useState(null);
  const [imageContained, setImageContained] = useState("");
  const fetchProductDetails = async () => {
    try {
      const res = await fetch(
        `https://generics-store-default-rtdb.firebaseio.com/products/${productId}.json`,
        {
          mode: "cors",
          method: "get",
        }
      );

      const data = await res.json();

      setProdDetails(data);
    } catch (err) {
      console.log(err);
    }
  };

  const addToCartHandler = () => {
    const item = {
      id: productId,
      image: prodDetails.image,
      amount: 1,
      price: Number(prodDetails.price),
      name: prodDetails.name,
    };
    console.log(item);

    // To update cart state
    addItem(item);
  };

  useEffect(() => {
    if (!token) {
      //redirect to products page
      navigate("/login");
    }
    fetchProductDetails();
  }, [token, isLoggedIn]);

  useEffect(() => {
    if (prodDetails) {
      setImageContained(prodDetails.image);
    }
  }, [prodDetails]);

  return (
    <>
      {prodDetails && (
        <div className={style.productDetailsOuterContainer}>
          <div className={style.productDetaisInnerContainer}>
            <div className={style.productMain}>
              <div className={style.productImageContainer}>
                <Zoom>
                  <img
                    src={imageContained}
                    alt=""
                    className={style.productImage}
                  />
                </Zoom>
              </div>
              <button
                className={style.btnAddToCart}
                onClick={() => addToCartHandler()}
              >
                <i
                  style={{
                    color: "#fff",
                    fontSize: "1.5rem",
                  }}
                  className="fa-solid fa-cart-plus"
                ></i>
                <span>ADD TO CART</span>
              </button>
            </div>
            <div className={style.productInformation}>
              <div className={style.productName}>{prodDetails.name}</div>
              <div className={style.productPrice}>
                {" "}
                <i className="fa-solid fa-indian-rupee-sign"></i>
                {prodDetails.price}
              </div>
              <div className={style.productDescription}>
                {prodDetails.description}
              </div>
              <div className={style.productImageLinks}>
                {prodDetails.images.map((el) => {
                  return (
                    <button
                      key={el}
                      className={style.btnImageLinks}
                      onMouseEnter={() => setImageContained(el)}
                    >
                      <img src={el} alt="product" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={style.prodSpecs}>
            {prodDetails.productDescription.map((info) => {
              for (const [key, value] of Object.entries(info)) {
                return (
                  <div key={key}>
                    <h3>{key}</h3>
                    <p>{value}</p>
                  </div>
                );
              }
            })}
          </div>
          <div className={style.reviews}>
            <h1>Customer reviews</h1>
            {prodDetails.reviews &&
              prodDetails.reviews.map((review) => {
                return (
                  <div className={style.reviewDetails} key={review}>
                    {review}
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
