import React, {useContext, useState} from "react";
import "./Navbar.css";
import tt_logo from "../Assets/tt_logo.jpeg";
import GB_cart from "../Assets/GB_cart.jpg";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems}= useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={tt_logo} alt="" />
        <p>TrendyTrove</p>
      </div>
      
        <ul className="nav-menu">
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
