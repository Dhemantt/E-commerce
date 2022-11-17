import React from "react";
import ContactForm from "./ContactForm";
import style from "./Contactus.module.css";
const Contactus = () => {
  return (
    <section className={style.contactUs}>
      <header className={style.contactHeader}>
        <h1>Contact Us</h1>

        <div className={style.contactUsInfo}>
          <p>
            Please contact us if you have any queries. We will revert you as
            soon as possible <i className="fa-regular fa-face-smile"></i>
          </p>

          <div className={style.contactMedium}>
            <i
              className="fa-brands fa-whatsapp whatsapp"
              style={{ color: "green" }}
            ></i>
            <span>+91-8984657732</span>
          </div>
          <div className={style.contactMedium}>
            <i className="fa-solid fa-phone" style={{ color: "grey" }}></i>
            <span>+91-8984657732</span>
          </div>
          <div className={style.contactMedium}>
            <i
              className="fa-regular fa-envelope email"
              style={{ color: "crimson" }}
            ></i>
            <span>queries@easyShopping.com</span>
          </div>
        </div>
      </header>

      <ContactForm />
    </section>
  );
};

export default Contactus;
