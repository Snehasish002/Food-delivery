import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <i className="fa-regular fa-square-plus"></i>
          <p>Add Items</p>
        </NavLink>

        <NavLink to='/list' className="sidebar-option">
          <i className="fa-solid fa-clipboard-check"></i>
          <p>List Items</p>
        </NavLink>

        <NavLink to= '/orders' className="sidebar-option">
          <i className="fa-regular fa-calendar-check"></i>
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
