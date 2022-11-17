import React, { useReducer, useEffect, useState } from "react";
import { saveCartInServer } from "../CartHelpers/FetchHelpers";
import { CartContext } from "./CartContext";
const cartReducer = (state, action) => {
  const { type } = action;
  let updatedItems = [];
  let updatedTotalAmount = 0;

  if (type === "clearItems") {
    console.log("inside clear items");
    return { cartItems: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (type === "getCartFromLocalStorage") {
    return action.cart;
  }
  if (type === "addItem") {
    // Item adder
    updatedItems = [];
    const item = state.cartItems.find((item) => item.id === action.item.id);
    if (!item) {
      // item not in cart, add the item
      updatedItems = [...state.cartItems, action.item];
    } else {
      // update the quantity by 1
      item.amount += 1;

      // filter out other items
      const otherItems = state.cartItems.filter(
        (item) => item.id !== action.item.id
      );
      updatedItems = [...otherItems, item];
    }
    updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
  }

  if (type === "delItem") {
    updatedItems = state.cartItems.filter((item) => action.id !== item.id);

    updatedTotalAmount = 0;
    for (let i = 0; i < updatedItems.length; i++) {
      updatedTotalAmount += updatedItems[i].price * updatedItems[i].amount;
    }
  }

  if (type === "changeAmount") {
    updatedItems = state.cartItems.map((item, idx) => {
      if (action.id === item.id) {
        const newAmt = +action.amt;
        return { ...item, amount: newAmt };
      } else return item;
    });
    const targetItem = state.cartItems.find((item) => action.id === item.id);

    updatedTotalAmount =
      state.totalAmount -
      targetItem.price * targetItem.amount +
      targetItem.price * action.amt;
  }

  return { cartItems: updatedItems, totalAmount: updatedTotalAmount };
};

export const CartContextProvider = ({ children }) => {
  const initialCartState = {
    cartItems: [],
    totalAmount: 0,
  };
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  useEffect(() => {
    dispatchCartAction({
      type: "getCartFromLocalStorage",
      cart: JSON.parse(localStorage.getItem("CART-USER")),
    });
  }, []);

  useEffect(() => {
    // save to local storage
    localStorage.setItem("CART-USER", JSON.stringify(cartState));
    console.log(cartState);

    let t = setTimeout(() => {
      console.log("Save to cart fired");

      if (JSON.parse(localStorage.getItem("auth"))) saveCartInServer();
    }, 20000);

    return () => clearTimeout(t);
  }, [cartState]);

  const addItemHandler = (newItem) => {
    console.log(newItem);
    dispatchCartAction({
      type: "addItem",
      item: newItem,
    });
  };
  const delItemHandler = (id) => {
    dispatchCartAction({
      type: "delItem",
      id: id,
    });
  };

  const amountChangeHandler = (amt, id) => {
    dispatchCartAction({
      type: "changeAmount",
      id: id,
      amt: amt,
    });
  };

  const clearCartItems = () => {
    dispatchCartAction({
      type: "clearItems",
    });
  };

  const cartContext = {
    cartItems: cartState.cartItems,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    delItem: delItemHandler,
    amountChangeHandler: amountChangeHandler,
    clearCart: clearCartItems,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
