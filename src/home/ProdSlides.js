import React, { useContext, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { HiOutlineShoppingBag, HiOutlineHeart } from 'react-icons/hi2';
import { Context } from '../App';

export default function ProdSlides({ index, cat, t }) {
  const { addCart } = useContext(Context);
    const { addHeart } = useContext(Context);
  const sales = useMemo(() => [25, 30, 50, 20, 15, 40], []);

  const filteredParfumes = useMemo(() => {
    return t('parfumes', { returnObjects: true })
      .filter(item => item.category === cat)
      .sort(() => Math.random() - 0.5)
      .slice(0, index);
  }, [t, cat, index]);

  const parfumesWithSales = useMemo(() => {
    return filteredParfumes.map(parfume => {
      const randomSale = sales[Math.floor(Math.random() * sales.length)];
      return { ...parfume, sale: randomSale };
    });
  }, [filteredParfumes, sales]);

  return (
    <div className="slides_container">
 <Swiper
  observer={true}
  observeParents={true}
  breakpoints={{
    480: { slidesPerView: 1, spaceBetween: 10 },
    768: { slidesPerView: 2, spaceBetween: 15 },
    1024: { slidesPerView: 3, spaceBetween: 20 },
    1150: { slidesPerView: 4, spaceBetween: 20 },
    1300: { slidesPerView: 5, spaceBetween: 20 },
  }}
>
  {parfumesWithSales.map(parfume => (
    <SwiperSlide key={parfume.id}>
      <div className="products_item">
        <div className="sale">-{parfume.sale}%</div>
        <img src={parfume.picture} alt={parfume.model} />
        <h2>{parfume.model}</h2>
        <h3>{parfume.company}</h3>
        <p>{parfume.type}</p>
        <div className="price">
          <del>{Math.round(parfume.price * 100 / (100 - parfume.sale)).toLocaleString()}֏</del>
          <b>{parfume.price.toLocaleString()}֏</b>
        </div>
        <div className="icons">
          <HiOutlineShoppingBag onClick={() => addCart({ ...parfume })} />
          <HiOutlineHeart onClick={() => addHeart({ ...parfume })}/>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </div>
  );
}