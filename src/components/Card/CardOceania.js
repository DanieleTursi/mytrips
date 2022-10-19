import React, {useState} from "react";
import './Card.css';
import {oceania} from './countries'


const CardOceania = ()=>{
  const [countries, setCountries] = useState (oceania)
  return (
//     <div className="cardContainer">
//     {countries.map((country) =>{
//     return (
//       <h1 style={country.bg} className="cardbox">{country.name}</h1>
//     );
// })}
//     </div>
<h1>No countries to display</h1>
);
  
};

export default CardOceania;