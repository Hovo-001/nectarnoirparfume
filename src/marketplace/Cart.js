import React, { useContext } from 'react';
import './Marketplace.css';
import { Context } from '../App';
import CartInner from './CartInner';

export default function Cart() {
    const { cart } = useContext(Context);
    return (
        <div className='cart_container'>
            {
                cart.length === 0 ? 
                <div className='cart_empty'>
                    <img src="https://dxjxpkwwt1blu.cloudfront.net/resource/empty-cart.png" alt="" />
                </div>
                :
            <CartInner />
            }
        </div>
    )
}