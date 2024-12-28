import React from 'react';
import ProdSlides from './ProdSlides';
import { useTranslation } from 'react-i18next';

export default function BestSellers() {
  const index = 16;
  const { t } = useTranslation();
  const cat = t('collection', { returnObjects: true })[1]; 
  
  return (
    <div className="swiper_slider_container">
      <h2 className="title">{t('catNames', { returnObjects: true })[0]}</h2>
      <ProdSlides index={index} cat={cat} t={t} />  
    </div>
  );
}