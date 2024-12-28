import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Context } from "../App";

export default function Navbar() {
  const { t } = useTranslation();
  const { setIndex, setPageObj,workLoad,setWorkLoad, setMenuOpen } = useContext(Context);


  return (
    <nav className="navigation_menu">
      <ul>
        <NavLink
          to='/'
          onClick={() => {
            setIndex(-1);
            setPageObj({ current: 1, pageSize: 16 });
            localStorage.setItem("currentPage", 1);
            setWorkLoad(!workLoad);
            window.scrollTo({top : 0});
            setMenuOpen(false)
          }}
        >
          {t('home')}
        </NavLink>
        {t("navbar", { returnObjects: true }).map((item, i) => (
          <li
            key={i}
            onClick={() => {
              setIndex(i);
              setPageObj({ current: 1, pageSize: 16 });
              localStorage.setItem("currentPage", 1);
              setWorkLoad(!workLoad);
              window.scrollTo({top : 0})
              setMenuOpen(false)
            }}
          >
            <NavLink to={`/${item}`} onClick={() =>{
               setWorkLoad(!workLoad);
               window.scrollTo({top : 0})
               setMenuOpen(false)
            }}>{item}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}