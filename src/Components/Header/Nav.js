import React from "react";
import style from "./Nav.module.css";
import CartButton from "./CartButton";
const Nav = () => {
  return (
    <nav className={style.nav}>
      <div className={style.navWrapper}>
        <ul>
          <li><a href='/home'>HOME</a></li>
          <li><a href='/store'>STORE</a></li>
          <li><a href='/about'>ABOUT</a></li>
        </ul>
        <CartButton />
      </div>
    </nav>
  );
};

export default Nav;
