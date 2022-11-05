import React, { useEffect, useReducer } from "react";
import { CartContext } from "./CartContext";

const initialCartState = {
  cartItems: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  const { type } = action;
  if (type === "addItem") {
    let updatedItems = [];

    const itemExists = state.cartItems.find(
      (item) => item.id === action.item.id
    );
    if (itemExists) {
      itemExists.amount += 1;
      updatedItems = [...state.cartItems];
    } else {
      updatedItems = [...state.cartItems, action.item];
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return { cartItems: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (type === "delItem") {
    const updatedItems = state.cartItems.filter(
      (item) => action.id !== item.id
    );

    let updatedTotalAmount = 0;
    for (let i = 0; i < updatedItems.length; i++) {
      updatedTotalAmount += updatedItems[i].price * updatedItems[i].amount;
    }
    return { cartItems: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (type === "changeAmount") {
    const updatedItems = state.cartItems.map((item, idx) => {
      if (action.id === item.id) {
        const newAmt = +action.amt;
        return { ...item, amount: newAmt };
      } else return item;
    });
    const targetItem = state.cartItems.find((item) => action.id === item.id);

    const updatedTotalAmount =
      state.totalAmount -
      targetItem.price * targetItem.amount +
      targetItem.price * action.amt;

    console.log(action.amt);
    return { cartItems: updatedItems, totalAmount: updatedTotalAmount };
  }
};

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );
  useEffect(() => {
    console.log(` Total amount 💲: ${cartState.totalAmount}`);
    console.log("Total items in cart🛒:", cartState.cartItems);
  }, [cartState]);

  const addItemHandler = (newItem) => {
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
    console.log(id, amt);
    dispatchCartAction({
      type: "changeAmount",
      id: id,
      amt: amt,
    });
  };

  const cartContext = {
    cartItems: cartState.cartItems,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    delItem: delItemHandler,
    amountChangeHandler: amountChangeHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
