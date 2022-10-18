import React,{Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import './App.css';
import {Helmet} from 'react-helmet';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CardAfrica from './components/Card/CardAfrica';
import CardAmerica from './components/Card/CardAmerica';
import CardAsia from './components/Card/CardAsia';



class App extends Component{
  constructor(){
    super()
    this.state ={
        europe:['AUSTRIA','BELGIUM','BOSNIA & HERZEGOVINA', 'BULGARIA'],
        searchfield:''
    }
  }

  render(){ 
    const {africa, america, asia, europe, oceania}= this.state;
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

      <Route path="/" element={<Card europe={europe}/>}/>
      <Route path="/africa" element={<CardAfrica europe={europe}/>}/>
      <Route path="/america" element={<CardAmerica america={america}/>}/>
      <Route path="/asia" element={<CardAsia asia={asia}/>}/>
      <Route path="/europe" element={<Card europe={europe}/>}/>
      <Route path="/oceania" element={<Card oceania={oceania}/>}/>
        
      </Routes>
      </div>
    </Router>
    )
  };

  
}

export default App;
