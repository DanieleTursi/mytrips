import { useNavigate } from "react-router-dom";
import '../Card/Card.css'

const Cities = ({cities})=>{
  const navigate = useNavigate();
  return (
    <div className="page">
    {cities.map((city) =>{
    return (<div className="cardContainer" onClick={() => navigate("/" + city.name)}>
      <h1 style={city.bg} className="cardbox">{city.name}</h1>
      </div>
    );
})}
    </div>
);
  
};

export default Cities;