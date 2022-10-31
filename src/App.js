import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { africa,america,asia,europe, oceania } from './components/Card/countries';
import Home from './components/Home/Home';
import Photogallery from './components/Country/Photogallery';
import { AustriaCities, WienSlider, SofiaSlider, BulgariaCities } from './components/Country/Slider';
import Cities from './components/Country/Cities';


const App = () => {
 

  return(
      <Router>
         <div className="App">
             <style jsx global>{`
                 body {
                 margin: 0px;
                 padding: 0px;
                 background: #F0F0F0;
                  }
              `}</style>
      <Navbar/>
      <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/africa" element={<Card countries={africa} />}/>
      <Route path="/america" element={<Card countries={america} />}/>
      <Route path="/asia" element={<Card countries={asia} />}/>
      <Route path="/europe" element={<Card countries={europe} />}/>
          <Route path="/AUSTRIA" element={<Cities cities={AustriaCities} />}/>
               <Route path="/Wien" element={<Photogallery Slider={WienSlider} City={AustriaCities} />}/>
          <Route path="/BElGIUM" element={<Photogallery Slider={WienSlider} City={AustriaCities} />}/>
          <Route path="/BULGARIA" element={<Cities cities={BulgariaCities} />}/>
          <Route path="/Sofia" element={<Photogallery Slider={SofiaSlider} City={BulgariaCities} />}/>
      <Route path="/oceania" element={<Card countries={oceania} />}/>
      
              
        
      </Routes>
      </div>
    </Router>
    )
  };

  


export default App;
