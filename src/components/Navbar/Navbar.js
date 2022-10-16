import React from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = ()=>{
    return(
      <div className="container">
        <h1 className="logo">MYTRIPS</h1>
        <a>AFRICA</a>
        <a>AMERICA</a>
        <a>ASIA</a>
        <a>EUROPE</a>
        <a>OCEANIA</a>
      </div>
    )
};

export default Navbar;