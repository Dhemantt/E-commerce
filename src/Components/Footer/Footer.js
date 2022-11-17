import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <section className={style.footer}>
      <div className={style.footerContainer}>
        <h1>The Generics</h1>
        <div className={style.socials}>
          <a href="facebook.com">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="twitter.com">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="youtube.com">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="spotify.com">
            <i className="fa-brands fa-spotify"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
