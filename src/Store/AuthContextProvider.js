import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  const savedAuth = JSON.parse(localStorage.getItem("auth"));

  const [token, setToken] = useState(() => {
    if (savedAuth) return savedAuth.idToken;
    return null;
  });
  const [email, setUseremail] = useState(() => {
    if (savedAuth) return savedAuth.email;
    return null;
  });
  const userLoggedIn = !!token;

  const loginHandler = (token, email) => {
    setUseremail(email);
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
    setUseremail(null);
  };

  const AuthContextValue = {
    token,
    email: email,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
