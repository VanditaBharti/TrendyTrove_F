import React, {useContext, useRef, useState} from "react";
import "./Navbar.css";
import tt_logo from "../Assets/tt_logo.jpeg";
import GB_cart from "../Assets/GB_cart.jpg";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

import nav_dropdown from '../Assets/nav_dropdown_icon.png'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems}= useContext(ShopContext);
  const menuRef =useRef();

  const dropdown_toggle=(e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={tt_logo} alt="" />
        <p>TrendyTrove</p>
      </div>

      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      
        <ul ref={menuRef} className="nav-menu">
          <li
          onClick = {()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/> : <></> }
          </li>
          <li
          onClick = {()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/> : <></> }
          </li>
          <li
          onClick = {()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/> : <></> }
          </li>
          <li
          onClick = {()=>{setMenu("accessories")}}><Link style={{textDecoration:'none'}} to='/accessories'>Accessories</Link>{menu==="accessories"?<hr/> : <></> }
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src={GB_cart} alt="" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      
    </div>
  );
};

export default Navbar;
