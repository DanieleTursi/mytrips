import {europe} from './countries';
import { useNavigate } from "react-router-dom";


const Card = ()=>{
  const countries = europe;
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