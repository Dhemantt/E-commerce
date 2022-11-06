import React from "react";
import style from "./Nav.module.css";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav className={style.nav}>
      <div className={style.navWrapper}>
        <ul>
          <li>
            <NavLink
              to="/home"
              style={({ isActive }) => ({
                color: isActive ? "cyan" : "white",
              })}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/store"
              style={({ isActive }) => ({
                color: isActive ? "cyan" : "white",
              })}
            >
              STORE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "cyan" : "white",
              })}
            >
              {" "}
              ABOUT
            </NavLink>
          </li>
        </ul>
        <CartButton />
      </div>
    </nav>
  );
};

export default Nav;
