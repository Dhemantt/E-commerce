import React, { useState } from "react";
import style from "./ContactForm.module.css";
const ContactForm = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");

  const handleSubmit = async (formInputs) => {
    try {
      const res = await fetch(
        "https://generics-store-default-rtdb.firebaseio.com/contacters.json",
        {
          mode: "cors",
          method: "post",
          body: JSON.stringify({
            name,
            email,
            contact,
          }),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error("Bad request");
      } else {
        setname("");
        setemail("");
        setcontact("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.formContainer}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({
            name: name,
            email: email,
            contact: contact,
          });
        }}
      >
        <div className={style.formControl}>
          <label htmlFor="name">name</label>
          <input
            value={name}
            type="text"
            id="name"
            className={style.name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>
        <div className={style.formControl}>
          <label htmlFor="email">email</label>
          <input
            value={email}
            type="e"
            id="email"
            className={style.email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <div className={style.formControl}>
          <label htmlFor="contact">Contact</label>
          <input
            value={contact}
            type="tel"
            pattern="^[0-9]{10}"
            id="contact"
            className={style.contact}
            onChange={(e) => {
              setcontact(e.target.value);
            }}
          />
        </div>
        <div className={style.formControl}>
          <button className={style.contactBtn} type="submit">
            Contact us
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
