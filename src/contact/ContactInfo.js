import React from "react";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const {t} = useTranslation();
  return (
    <div>
      <h2>{t('contact', {returnObjects : true})[0].uscont}</h2>
      <ul>
        <li><strong>{t('contact', {returnObjects : true})[0].phone}:</strong> +374 (77) 88-66-01</li>
        <li><strong>{t('contact', {returnObjects : true})[0].email}:</strong> example@parfume.com</li>
        <li><strong>{t('contact', {returnObjects : true})[0].addres}:</strong> str. Raffu/19, Armenia, Erevan</li>
        <div className="info_images">
          <img src="images/contact2.jpg" alt="" />
          <img src="images/contact3.jpg" alt="" />
          <img src="images/contact4.jpg" alt="" />
          <img src="images/contact5.jpg" alt="" />
        </div>
      </ul>
    </div>
  );
};

export default ContactInfo;
