import axios from "axios";

const getEmail = () => {
  const authDetails = JSON.parse(localStorage.getItem("auth"));
  return authDetails?.email;
};
const END_POINT__ = `edb915c3148e4085a1db0e7e7b13b28e`;
let URL = "";
export const saveCartInServer = async (cart) => {
  const email = getEmail();

  try {
    if (!email) throw new Error("User is not logged in🏴");
    URL = `https://crudcrud.com/api/${END_POINT__}/${email.replace(
      /[^a-zA-Z0-9 ]/g,
      ""
    )}`;
  } catch (error) {
    console.log(error);
  }

  let res = null;
  try {
    res = await axios.get(URL);

    if (res.data.length > 0) {
      res = await axios.put(URL + `/${res.data[0]._id}`, cart);
    } else {
      res = await axios.post(URL, cart);
    }
  } catch (error) {
    console.log(error);
  }
};
export const getCartFromServer = async () => {
  const email = getEmail();
  try {
    if (!email) throw new Error({msg: "User is not logged in🏴"});
    URL = `https://crudcrud.com/api/${END_POINT__}/${email.replace(
      /[^a-zA-Z0-9 ]/g,
      ""
    )}`;
  } catch (error) {
    console.log(error.msg);
  }

  let res = null;
  try {
    res = await axios.get(URL);
    res = await axios.get(URL + `/${res.data[0]._id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
