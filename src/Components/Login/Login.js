import React, { useState, useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../Store/AuthContext";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "./saveAuthInLocalStorage";

const Login = () => {
  
  const { isLoggedIn, login } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseError, setResponseError] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const emailRef = useRef();

  const navigate = useNavigate();
  const switchAuthHandler = (e) => {
    setIsLogin((prev) => !prev);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const API_KEY = "AIzaSyCsPlaQrg2Tt19EYvZ5YpErk16-WGwNM28";

    const OPTION = isLogin ? "signInWithPassword" : "signUp";

    try {
      setisLoading(true);
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:${OPTION}?key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      );

      const data = await res.json();
      setisLoading(false);

      if (data?.error) {
        setResponseError(data?.error?.message);
      } else if (res.ok) {
        //save idToken in context
        login(data.idToken, data.email);

        // to save auth details in localStorage
        saveToLocalStorage(data);
      } else if (!res.ok) {
        // Some Authenication error happened
        throw new Error("Auth failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/products");
    }
  }, [isLoggedIn]);

  return (
    <div className={style.formContainer}>
      <h1 className={style.header}>Login to explore our store</h1>
      <form className={style.authForm} onSubmit={submitHandler}>
        <div className={style.formControl}>
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            value={email}
            type="email"
            id="email"
            className={style.inputEmail}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            autoComplete="off"
          />
        </div>
        <div className={style.formControl}>
          <label htmlFor="password">Password</label>
          <input
            value={password}
            type="password"
            id="password"
            className={style.inputPassword}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            autoComplete="off"
          />
        </div>
        <div className={style.formControl}>
          <button
            type="submit"
            id="btnLogin"
            disabled={isLoading ? true : false}
            className={style.btnLogin}
          >
            {isLogin ? "LOGIN" : "REGISTER"}
            {isLoading && (
              <>
                <div className={style.ldsRing}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </>
            )}
          </button>
          <button
            type="button"
            className={style.btnRegister}
            onClick={switchAuthHandler}
          >
            {isLogin ? " Create a new account" : "Have an account! Login Now"}
          </button>
          {responseError && (
            <p className={style.forErrorMsgs}>{responseError}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
