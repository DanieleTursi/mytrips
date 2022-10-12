import React, {useState} from "react";
import './Card.css';
import {europe , africa, america, asia, oceania} from './countries'

const Card = ()=>{
  const [countries, setCountries] = useState (europe)
  return (
    <div >
    {countries.map((country) =>{
    return (
      <h1 style={country.bg} className="cardContainer">{country.name}</h1>
    );
})}
    </div>
);
  
};

export default Card;