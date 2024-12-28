import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { useTranslation } from 'react-i18next';


import "./Contact.css";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="Contact">
      <h2 className="title">{t('contact', {returnObjects : true})[0].title}</h2>
      <div className="contact_container">
        <section className="contact-info">
          <ContactInfo />
        </section>

        <section className="contact-form">
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default Contact;

