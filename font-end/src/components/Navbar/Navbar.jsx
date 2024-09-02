import React, { useContext, useState } from "react";
import {useNavigate} from "react-router-dom"; 
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate()
  
  const logout = () => {
      localStorage.removeItem("token")
      setToken("");
      navigate("/")
      
  }
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#"
          onClick={() => setMenu("app")}
          className={menu === "app" ? "active" : ""}
        >
          App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <i className="fa-solid fa-magnifying-glass"></i>
        <div className="navbar-search-icon">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}>
                <i className="fa-solid fa-bag-shopping"></i>
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
