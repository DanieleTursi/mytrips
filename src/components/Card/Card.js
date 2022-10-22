import React, {useState} from "react";
import './Card.css';
import {europe , africa, america, asia, oceania} from './countries';
import { useNavigate } from "react-router-dom";


const Card = ()=>{
  const [countries, setCountries] = useState (europe)
  const navigate = useNavigate();
  return (
    <div className="page">
    {countries.map((country) =>{
    return (<div onClick={() => navigate("/" + country.name)} className="cardContainer">
      <h1 style={country.bg} className="cardbox">{country.name}</h1>
      </div>
    );
})}
    </div>
);
  
};

export default Card;