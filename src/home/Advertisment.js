import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Advertisment() {
    const { t } = useTranslation();
    return (
        <div className='advertisment_container'>
            <h2>{t('giftscontent')}</h2>
            <div className="pictures">
                <img src="images/advert1.jpg" alt="" />
                <img src="images/advert2.webp" alt="" />
            </div>
        </div>
    )
}