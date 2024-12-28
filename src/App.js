import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./header/Footer";
import Header from "./header/Header";
import Routeing from "./Routeing";
import { createContext } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useTranslation } from "react-i18next";
export const Context = createContext();
function App() {
  const [index, setIndex] = useState(0);
  const [workLoad, setWorkLoad] = useState(true);
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [count, setCount] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [textInload, setTextInLoad] = useState('');
  const { t } = useTranslation();

  const showAdded = (text) => {
    setOpenAdd(true);
    setTextInLoad(text);
    setTimeout(() => {
      setOpenAdd(false);
    }, 2500);
  }
  
  const addCart = item => !cart.some(cartItem => cartItem.id === item.id) ? (setCart([...cart, item]), showAdded(t('cartTexts', {returnObjects : true})[0])) : showAdded(t('cartTexts', {returnObjects : true})[1]);

  const addHeart = item => !favorite.some(favoriteItem => favoriteItem.id === item.id) ? (setFavorite([...favorite, item]), showAdded(t('FavoriteTexts', {returnObjects : true})[0])) : showAdded(t('FavoriteTexts', {returnObjects : true})[1]);

  const removeCart = item => setCart([...cart.filter(filt => filt.id !== item.id)]);
  const removeFavorite = item => setFavorite([...favorite.filter(filt => filt.id !== item.id)]);

  const [pageObj, setPageObj] = useState({
    current: parseInt(localStorage.getItem("currentPage"), 16) || 1,
    pageSize: 16,
  });


  const properties = {
    index, setIndex,
    workLoad, setWorkLoad,
    pageObj, setPageObj,
    cart, favorite, addCart,
    removeCart, addHeart,
    removeFavorite, setCount,
    menuOpen, setMenuOpen,
    showAdded
  }

  useEffect(() => {
    let loader = document.querySelector('.loader');
    loader.style.display = 'flex';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 3000);
  }, [workLoad]);

  return (
    <Context.Provider value={properties}>
      <div className="addToLoad" style={{ right: openAdd ? 0 : '-100vw' }}>
        <h2><IoIosCheckmarkCircleOutline /> {textInload}</h2>
      </div>
      <div className="App">
        <div className="loader">
          <img src="images/loading.gif" alt="" />
        </div>
        <Header />
        <Routeing />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;