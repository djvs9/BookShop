import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
 
import React from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom";
import TotalItems from '../CartContent/TotalItems';

const Navbar = () => {
  const { cart } = useContext(dataContext);
  return (
    <div className='nav-con tainer'>
        <nav className='navbar'>
          <Link to={"/"}>
            <h1 className='navbar-logo'>Shop.</h1>
          </Link>
            <Link className='seeCarrito' to={"/cart"}>🛒{cart.length > 0 ? <TotalItems/> : null }</Link>
        </nav>
    </div>
  )
};

export default Navbar;