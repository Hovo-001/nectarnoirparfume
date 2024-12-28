import React, { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { HiOutlineShoppingBag, HiOutlineHeart } from "react-icons/hi2";
import './Collection.css';
import { Context } from '../App';

export default function Collection() {
  const { t } = useTranslation();
  const { addCart } = useContext(Context);
  const { addHeart } = useContext(Context);


  const parfumes = useMemo(() => 
    t('parfumes', { returnObjects: true })
      .filter(item => item.category === t('setName')), 
    [t]
  );

  const sales = useMemo(() => {
    const salesArray = [8, 10, 5, 12, 14, 20];
    return parfumes.map(() => salesArray[Math.floor(Math.random() * salesArray.length)]);
  }, [parfumes]);

  return (
    <div className='collection_wrapper'>
      <h2 className="title">{t('setName')}</h2>
      <div className='collection_container'>
        {parfumes.map((set, index) => {
          const sale = sales[index];
          const originalPrice = Math.round(set.price * 100 / (100 - sale));
          return (
            <div className='set_item' key={set.id}>
              <div className="set_sale">-{sale}%</div>
              <img src={set.picture} alt={set.model} />
              <h2>{set.model}</h2>
              <p>{set.company}</p>
              <div className="price">
                <del>{originalPrice.toLocaleString()}֏</del>
                <b>{set.price.toLocaleString()}֏</b>
              </div>
              <div className="icons">
                <HiOutlineShoppingBag onClick={() => addCart({ ...set })} />
                <HiOutlineHeart onClick={() => addHeart({ ...set })}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}