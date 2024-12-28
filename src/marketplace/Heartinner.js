import { useContext } from "react";
import { Context } from "../App";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { HiOutlineShoppingBag } from 'react-icons/hi';

export default function Heartinner() {
    const { favorite, removeFavorite, addCart,showAdded } = useContext(Context);
    return (
        <div className="cart_inner">
            {favorite.map((item, i) => {
                return <div className="cart_item" key={item.id}>
                    <span>{i + 1}.</span>
                    <img src={item.picture} alt="" />
                    <div className="name_block">
                        <h5>{item.model}</h5>
                        <p>{item.company}</p>
                        <span>{item.type}</span>
                    </div>
                    <h3>{item.price}֏</h3>
                    <div className="icons">
                        <HiOutlineShoppingBag onClick={() => {
                            addCart({ ...item });
                            showAdded('Product Added in Cart')
                        }} />
                        <FaTrash onClick={() => {
                            removeFavorite(item);
                        }} />
                    </div>
                </div>
            })}
        </div>
    )
}