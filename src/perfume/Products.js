import React, { useContext, useEffect, useMemo } from 'react';
import { useTranslation } from "react-i18next";
import { Pagination, Divider } from 'uiw';
import { Context } from "../App";
import { HiOutlineShoppingBag, HiOutlineHeart } from "react-icons/hi2";

export default function Products() {
  const { t } = useTranslation();
  const sales = [25, 30, 50, 20, 15, 40];
  const parfumes = useMemo(() => t('parfumes', { returnObjects: true }), [t]);
  const { pageObj, setPageObj, addCart,addHeart, workLoad, setWorkLoad } = useContext(Context);
  const productsWithSales = useMemo(() => {
    return parfumes.map((parfume) => {
      const randomSale = sales[Math.floor(Math.random() * sales.length)];
      return { ...parfume, sale: randomSale };
    });
  }, [parfumes]);
  const startIdx = (pageObj.current - 1) * pageObj.pageSize;
  const endIdx = startIdx + pageObj.pageSize;
  const currentItems = useMemo(() => productsWithSales.slice(startIdx, endIdx), [productsWithSales, startIdx, endIdx]);
  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage && savedPage !== String(pageObj.current)) {
      localStorage.setItem("currentPage", pageObj.current);
    }
  }, [pageObj.current]);
  const handlePageChange = (current) => {
    setPageObj((prev) => {
      if (prev.current !== current) {
        return { ...prev, current };
      }
      return prev;
    });
    window.scrollTo({ top: 0 });
    setWorkLoad(!workLoad)
  };

  const handlePageSizeChange = (current, pageSize) => {
    setPageObj({ current: 1, pageSize });
  };

  return (
    <>
      <div className="products_container">
        {currentItems.map((parfume) => {
          return (
            <div className="products_item" key={parfume.id}>
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
          );
        })}
      </div>
      <Divider />
      <Pagination
        current={pageObj.current}
        pageSize={pageObj.pageSize}
        total={parfumes.length}
        divider
        onChange={handlePageChange}
        onShowSizeChange={handlePageSizeChange}
      />
    </>
  );
}