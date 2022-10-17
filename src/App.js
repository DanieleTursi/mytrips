import React,{Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import './App.css';
import {Helmet} from 'react-helmet';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



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
                 background:#FFFFFF;
                  }
              `}</style>
      <Navbar/>
      <Routes>

      <Route path="/" element={<Card europe={europe}/>}/>
      <Route path="/africa" element={<Card africa={africa}/>}/>
      <Route path="/america" element={<Card america={america}/>}/>
      <Route path="/asia" element={<Card asia={asia}/>}/>
      <Route path="/europe" element={<Card europe={europe}/>}/>
      <Route path="/oceania" element={<Card oceania={oceania}/>}/>
        
      </Routes>
      </div>
    </Router>
    )
  };

  
}

export default App;
