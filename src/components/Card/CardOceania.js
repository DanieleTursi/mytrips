import {oceania} from './countries'

const CardOceania = ()=>{
  const countries = oceania
  return (
    <div className="cardContainer">
    {countries.map((country) =>{
    return (
      <h1 style={country.bg} className="cardbox">{country.name}</h1>
    );
    })}
    <h1>No countries to display</h1>
    </div>
);
};

export default CardOceania;