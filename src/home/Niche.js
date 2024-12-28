import React from 'react';
import ProdSlides from './ProdSlides';
import { useTranslation } from 'react-i18next';

export default function Niche() {
  const index = 5;
  const { t } = useTranslation();
  const cat = t('collection', { returnObjects: true })[0];  // Get the category from the translations
  
  return (
    <div className="swiper_slider_container">
      <h2 className="title">{t('catNames', { returnObjects: true })[2]}</h2>
      <ProdSlides index={index} cat={cat} t={t} />  {/* Pass t to ProdSlides for reuse */}
    </div>
  );
}