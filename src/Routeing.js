import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { useMemo } from "react";
import Home from "./home/Home";
import About from "./about/About";
import Collection from "./collection/Collection";
import Perfume from "./perfume/Perfume";
import Contact from "./contact/Contact";
import Cart from "./marketplace/Cart";
import Heart from "./marketplace/Heart";

export default function Routeing() {
  const { t } = useTranslation();
  const navbarPaths = useMemo(() => t('navbar', { returnObjects: true }), [t]);
  const shopName = useMemo(() => t('shopname'), [t]);
  const heartname = useMemo(() => t('heartname'), [t]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`/${navbarPaths[0]}`} element={<About />} />
      <Route path={`/${navbarPaths[1]}`} element={<Collection />} />
      <Route path={`/${navbarPaths[2]}`} element={<Perfume />} />
      <Route path={`/${navbarPaths[3]}`} element={<Contact />} />
      <Route path={`/${shopName}`} element={<Cart />} />
      <Route path={`/${heartname}`} element={<Heart />} />
    </Routes>
  );
}