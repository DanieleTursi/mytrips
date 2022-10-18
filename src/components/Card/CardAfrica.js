import React, {useState} from "react";
import { africa} from './countries'


const CardAfrica = ()=>{
  const [countries, setCountries] = useState (africa)
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

export default CardAfrica;