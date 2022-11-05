import React from "react";
import style from "./Nav.module.css";
import CartButton from "./CartButton";
const Nav = () => {
  return (
    <nav>
      <div className={style.navWrapper}>
        <ul>
          <li>HOME</li>
          <li>STORE</li>
          <li>ABOUT</li>
        </ul>
        <CartButton />
      </div>
    </nav>
  );
};

export default Nav;
