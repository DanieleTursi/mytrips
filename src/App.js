
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import './App.css';
import {Helmet} from 'react-helmet';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CardAfrica from './components/Card/CardAfrica';
import CardAmerica from './components/Card/CardAmerica';
import CardAsia from './components/Card/CardAsia';
import CardOceania from './components/Card/CardOceania';
import Home from './components/Home/Home';
import Austria from './components/Country/Austria';
import { AustriaSlider } from './components/Country/Slider';



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
      <Route path="/africa" element={<CardAfrica />}/>
      <Route path="/america" element={<CardAmerica />}/>
      <Route path="/asia" element={<CardAsia/>}/>
      <Route path="/europe" element={<Card/>}/>
      <Route path="/oceania" element={<CardOceania/>}/>
      <Route path="/AUSTRIA" element={<Austria slides={AustriaSlider}/>}/>
        
      </Routes>
      </div>
    </Router>
    )
  };

  


export default App;
