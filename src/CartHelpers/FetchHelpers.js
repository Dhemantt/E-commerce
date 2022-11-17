import axios from "axios";

const getCart = () => {
  const cart = JSON.parse(localStorage.getItem("CART-USER"));
  return cart;
};

const getEmail = () => {
  const authDetails = JSON.parse(localStorage.getItem("auth"));
  return authDetails?.email;
};
const END_POINT__ = `e06c7348d347487084b553ac9e9415fc`;

export const saveCartInServer = async () => {
  let URL = `https://crudcrud.com/api/${END_POINT__}/${getEmail().replace(
    /[^a-zA-Z0-9 ]/g,
    ""
  )}`;
  const cart = getCart();
  console.log("requesting to :", URL);

  let res = null;
  try {
    res = await axios.get(URL);

    if (res.data.length > 0) {
      console.log("PUT SUCCESS TO URL: ", URL + "/" + res.data[0]._id);
      res = await axios.put(URL + `/${res.data[0]._id}`, { cart });
    } else {
      console.log("POST SUCCESS TO URL: ", URL + "/");
      res = await axios.post(URL, { cart });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCartFromServer = async (email) => {
  let URL = `https://crudcrud.com/api/${END_POINT__}/${email.replace(
    /[^a-zA-Z0-9 ]/g,
    ""
  )}`;

  let res = null;
  try {
    res = await axios.get(URL);
    console.log("requesting to :", URL + `/${res.data[0]._id}`);
    res = await axios.get(URL + `/${res.data[0]._id}`);
    console.log(res);

    localStorage.setItem("CART-USER", JSON.stringify(res.data.cart));
    console.log(res.data.cart);
  } catch (error) {
    console.log(error);
  }
};
