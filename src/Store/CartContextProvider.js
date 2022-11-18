import React, { useReducer, useEffect, useContext } from "react";
import {
  saveCartInServer,
  getCartFromServer,
} from "../CartHelpers/FetchHelpers";
import { CartContext } from "./CartContext";
import { AuthContext } from "./AuthContext";

const cartReducer = (state, action) => {
  const { type } = action;
  let updatedItems = [];
  let updatedTotalAmount = 0;

  if (type === "clearItems") {
    return { cartItems: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (type === "fetchCart") {
    console.log(action.cart);
    if (action.cart) return action.cart;
    else return { cartItems: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (type === "addItem") {
    // action:add item
    updatedItems = [];
    const item = state.cartItems.find((item) => item.id === action.item.id);
    if (!item) {
      // if item not in cart, add the item
      updatedItems = [...state.cartItems, action.item];
    } else {
      // update the quantity by 1
      item.amount += 1;

      // filter out other items
      const otherItems = state.cartItems.filter(
        (item) => item.id !== action.item.id
      );
      // update cartItems with updated quantity of the product
      updatedItems = [...otherItems, item];
    }
    updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
  }
  // action: delete item
  if (type === "delItem") {
    updatedItems = state.cartItems.filter((item) => action.id !== item.id);

    updatedTotalAmount = 0;
    for (let i = 0; i < updatedItems.length; i++) {
      updatedTotalAmount += updatedItems[i].price * updatedItems[i].amount;
    }
  }

  // action: change quantity
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
  const { isLoggedIn } = useContext(AuthContext);

  // fetch cart when the users logs in/
  useEffect(() => {
    getCartFromServer()
      .then((cartFromServer) => {
        console.log("🙋‍♀️", cartFromServer);
        fetchCartFromServer({
          cartItems: cartFromServer.cartItems,
          totalAmount: cartFromServer.totalAmount,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoggedIn]);

  useEffect(() => {
    //save cart details to server on every cartState change
    // after 1sec to reduce requests
    let t = setTimeout(() => {
      if (localStorage.getItem("auth")) {
        saveCartInServer(cartState);
      }
    }, 1000);

    return () => clearTimeout(t);
  }, [cartState]);

  // cartState Handlers

  const fetchCartFromServer = (cart) => {
    dispatchCartAction({
      type: "fetchCart",
      cart: cart,
    });
  };

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
    fetchCartFromServer: fetchCartFromServer,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
