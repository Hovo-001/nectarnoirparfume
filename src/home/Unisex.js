import React from 'react';
import ProdSlides from './ProdSlides';
import { useTranslation } from 'react-i18next';

export default function Unisex() {
  const index = 10;
  const { t } = useTranslation();
  const cat = t('collection', { returnObjects: true })[2];  // Get the category from the translations
  
  return (
    <div className="swiper_slider_container">
      <h2 className="title">{t('catNames', { returnObjects: true })[1]}</h2>
      <ProdSlides index={index} cat={cat} t={t} />  {/* Pass t to ProdSlides for reuse */}
    </div>
  );
}