import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { Us, Am, Ru } from 'react-flags-select';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../App";

export default function Translated() {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const { index, workLoad, setWorkLoad } = useContext(Context);
  const currentLang = i18n.language; 
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const navigatePage = (lang) => {
    setWorkLoad(!workLoad);
    setTimeout(() => {
      changeLanguage(lang);
      if (index !== -1) {
        navigate(t('navbar', { returnObjects: true })[index]);
      }
      if (index === 10) {
        navigate(t('shopname'));
      }
      if(index === 20) {
        navigate(t('heartname'));
      }
    }, 3000);
  };

  return (
    <div className="translated_container">
      <Us
        onClick={() => currentLang !== "en" && navigatePage("en")}
        style={{ cursor: currentLang === "en" ? "not-allowed" : "pointer" }}
      />
      <Am
        onClick={() => currentLang !== "hy" && navigatePage("hy")}
        style={{ cursor: currentLang === "hy" ? "not-allowed" : "pointer" }}
      />
      <Ru
        onClick={() => currentLang !== "ru" && navigatePage("ru")}
        style={{ cursor: currentLang === "ru" ? "not-allowed" : "pointer" }}
      />
    </div>
  );
}