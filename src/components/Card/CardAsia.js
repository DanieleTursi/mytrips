import React, {useState} from "react";
import './Card.css';
import {asia} from './countries'


const CardAsia = ()=>{
  const [countries, setCountries] = useState (asia)
  return (
    <div className="cardContainer">
    {countries.map((country) =>{
    return (
      <h1 style={country.bg} className="cardbox">{country.name}</h1>
    );
})}
    </div>
);
  
};

export default CardAsia;