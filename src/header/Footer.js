import React from 'react'
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const  { t } = useTranslation();
    return (
        <footer>
            <div className="first_block">
                <Navbar />
                <div className="items">
                    {t('menuItems', {returnObjects : true}).map(menu => {
                        return <NavLink to={`/${menu}`}>{menu}</NavLink>
                    })}
                </div>
                <img src="logowhite.png" alt="" />
            </div>
            <p>{t('copyright')} &copy;</p>
        </footer>
    )
}