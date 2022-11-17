import React, { useContext } from "react";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Store/AuthContext";
import { deleteFromLocalStorage } from "../Login/saveAuthInLocalStorage";
import { saveCartInServer } from "../../CartHelpers/FetchHelpers";
import { CartContext } from "../../Store/CartContext";
const Nav = () => {
  const { isLoggedIn, logout, email } = useContext(AuthContext);
  const { clearCart } = useContext(CartContext);

  return (
    <nav className={style.nav}>
      <div className={style.navWrapper}>
        <ul>
          <li>
            <NavLink
              id="navlink"
              to="/home"
              style={({ isActive }) => ({
                color: isActive ? "#5d646c" : "white",
                border: isActive ? "0.15rem solid #5d646c" : "0",
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
                color: isActive ? "#5d646c" : "white",
                border: isActive ? "0.15rem solid #5d646c" : "0",
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
                color: isActive ? "#5d646c" : "white",
                border: isActive ? "0.15rem solid #5d646c" : "0",
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
                color: isActive ? "#5d646c" : "white",
                border: isActive ? "0.15rem solid #5d646c" : "0",
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
                  color: isActive ? "#5d646c" : "white",
                  border: isActive ? "0.15rem solid #5d646c" : "0",
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

                  saveCartInServer();

                  // clear 'auth' from localStorage
                  deleteFromLocalStorage();

                  // clear CART from local storage
                  try {
                    localStorage.removeItem("CART-USER");
                  } catch (err) {
                    console.log(err);
                  }

                  clearCart();
                }}
                to="/login"
                style={({ isActive }) => ({
                  color: isActive ? "#5d646c" : "white",
                  border: isActive ? "0.15rem solid #5d646c" : "0",
                })}
              >
                LOGOUT
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink
                id="navlink"
                to="/cart"
                style={({ isActive }) => ({
                  color: isActive ? "#5d646c" : "white",
                  border: isActive ? "0.15rem solid #5d646c" : "0",
                })}
              >
                CART
              </NavLink>
            </li>
          )}
        </ul>
        {isLoggedIn && <p className={style.username}>Welcome, {email}</p>}
      </div>
    </nav>
  );
};

export default Nav;
