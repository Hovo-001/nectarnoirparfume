import React, { useContext } from 'react';
import './Marketplace.css';
import { Context } from '../App';
import Heartinner from './Heartinner';


export default function Heart() {
    const { favorite } = useContext(Context);
    return (
        <div className='heart_container'>
            {
                favorite.length === 0 ?
                    <div className='cart_empty'>
                        <img src="https://cdn-icons-png.flaticon.com/512/12214/12214640.png" alt="" />
                    </div>
                    :
                    <Heartinner />
            }
        </div>
    )
}