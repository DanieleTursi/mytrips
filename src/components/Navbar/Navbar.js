import React from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ()=>{
  const navigate = useNavigate();
    return(
      <div className="container">
        <h1 onClick={() => navigate("/")} className="logo">MYTRIPS</h1>
        <a onClick={() => navigate("/africa")}>AFRICA</a>
        <a onClick={() => navigate("/america")}>AMERICA</a>
        <a onClick={() => navigate("/asia")}>ASIA</a>
        <a onClick={() => navigate("/europe")}>EUROPE</a>
        <a onClick={() => navigate("/oceania")}>OCEANIA</a>
      </div>
    )
};

export default Navbar;