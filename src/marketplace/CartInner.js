import { useContext } from "react";
import { Context } from "../App";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { FaTrash } from "react-icons/fa";

export default function CartInner() {
    const { cart, removeCart, setCount } = useContext(Context);
    return (
        <div className="cart_inner">
            {cart.map((item, i) => {
                return <div className="cart_item" key={item.id}>
                    <span>{i + 1}.</span>
                    <img src={item.picture} alt="" />
                    <div className="name_block">
                        <h5>{item.model}</h5>
                        <p>{item.company}</p>
                        <span>{item.type}</span>
                    </div>
                    <h3>{item.price}֏</h3>
                    <div className="counter_block">
                        <button onClick={() => {
                            if(item.isQuan > 1) {
                                setCount(item.isQuan -= 1);
                            }
                        }}> <IoMdArrowDropdown /> </button>
                        <span>{item.isQuan}</span>
                        <button onClick={() => {
                            setCount(item.isQuan += 1);
                        }}> <IoMdArrowDropup /> </button>
                    </div>
                    <h3>{item.price * item.isQuan}֏</h3>
                    <FaTrash onClick={() => {
                        removeCart(item);
                    }}/>
                </div>
            })}
        </div>
    )
}