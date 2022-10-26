import {africa} from './countries'

const CardAfrica = ()=>{
  const countries= africa
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