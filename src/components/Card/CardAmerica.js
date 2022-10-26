import './Card.css';
import {america} from './countries'


const CardAmerica = ()=>{
  const countries = america;
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

export default CardAmerica;