import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Translated from './Translated';
import { FaHeart, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { Context } from '../App';

export default function Header() {
  const { t } = useTranslation();
  const { setIndex, menuOpen, setMenuOpen } = useContext(Context);

  return (
    <header>
      <Link to='/'><img src="logowhite.png" alt="Logo" /></Link>
      <nav className={menuOpen ? 'menu open' : 'menu'}>
        <Navbar />
      </nav>
      <div className="market_icons_container">
        <Translated />
        <Link to={`/${t('shopname')}`} onClick={() => {
          setIndex(10)
          setMenuOpen(false)
          }}><FaShoppingBag /></Link>
        <Link to={`/${t('heartname')}`} onClick={() => {
          setIndex(20)
          setMenuOpen(false)
        }}><FaHeart /></Link>
        <div className="burger-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}