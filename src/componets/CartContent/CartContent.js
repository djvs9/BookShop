import React from 'react'
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import  { CartElements }  from './CartElements';
import CartTotal from './CartTotal';
import "./CartContent.css";
import Navbar from '../Navbar/Navbar';

const CartContent = () => {
const {cart} = useContext(dataContext);

return (
  <>
    <Navbar />
    {cart.length > 0 ? (
      <>
        <CartElements />
        <CartTotal />
      </>
    ): (
      <h2 className='cart-messagge-center'>Tú carrito está vacío</h2>
    )}
  </>
)
}



export default CartContent