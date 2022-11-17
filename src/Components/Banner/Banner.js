import React from "react";
import style from "./Banner.module.css";
const Banner = () => {
  return (
    <section className={style.banner}>
      <h1>The Generics</h1>
      <img style={{
        width: '100%',
        height: '500px',
        objectFit: 'contain',
        paddingBottom: '100px'
      }} src="hero.JPG" alt="hero" />
    </section>
  );
};

export default Banner;
