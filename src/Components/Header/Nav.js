import React, { useContext } from "react";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Store/AuthContext";
import { deleteFromLocalStorage } from "../Login/saveAuthInLocalStorage";

const Nav = () => {
  const { isLoggedIn, logout, email } = useContext(AuthContext);

  return (
    <nav className={style.nav}>
      <div className={style.navWrapper}>
        <ul>
          <li>
            <NavLink
              id="navlink"
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "white",
                border: isActive ? "0.15rem solid #fff" : "0",
              })}
            >
              HOME
            </NavLink>
          </li>

          <li>
            <NavLink
              id="navlink"
              to="/products"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "white",
                border: isActive ? "0.15rem solid #fff" : "0",
              })}
            >
              PRODUCTS
            </NavLink>
          </li>

          <li>
            <NavLink
              id="navlink"
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "white",
                border: isActive ? "0.15rem solid #fff" : "0",
              })}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              id="navlink"
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "white",
                border: isActive ? "0.15rem solid #fff" : "0",
              })}
            >
              CONTACT
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink
                id="navlink"
                to="/login"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "white",
                  border: isActive ? "0.15rem solid #fff" : "0",
                })}
              >
                LOGIN
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink
                id="navlink"
                onClick={() => {
                  // clear idToken from context
                  logout();

                  // clear 'auth' from localStorage
                  deleteFromLocalStorage();
                }}
                to="/login"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "white",
                  border: isActive ? "0.15rem solid #fff" : "0",
                })}
              >
                LOGOUT
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink
                className={style.cartButtonTopRight}
                id="navlink"
                to="/cart"
              >
                <i className="fa-solid fa-cart-shopping"></i>
                CART
              </NavLink>
            </li>
          )}
        </ul>
        {isLoggedIn && <p className={style.username}><span>Welcome,</span> {email}</p>}
      </div>
    </nav>
  );
};

export default Nav;
