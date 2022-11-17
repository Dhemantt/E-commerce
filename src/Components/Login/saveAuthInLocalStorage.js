export function saveToLocalStorage({ email, idToken }) {
  localStorage.setItem(
    "auth",
    JSON.stringify({
      email: email,
      idToken: idToken,
    })
  );
}
export function deleteFromLocalStorage() {
  localStorage.removeItem("auth");
}
