import React from "react";
export const CartContext = React.createContext({});

const CartContextProvider = ({ children }) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
