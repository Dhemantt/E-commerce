import React, { useState } from "react";

export const ShowCartContext = React.createContext({
  showCart: false,
  toggleCart: () => {},
});

export const ShowCartContextProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <ShowCartContext.Provider value={{ showCart, toggleCart }}>
      {children}
    </ShowCartContext.Provider>
  );
};
