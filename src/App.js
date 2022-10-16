import React,{Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import './App.css';
import {Helmet} from 'react-helmet';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



class App extends Component{
  // constructor(){
  //   super()
  //   this.state ={
  //       europe:['AUSTRIA','BELGIUM','BOSNIA & HERZAGOVINA', 'BULGARIA'],
  //       searchfield:''
  //   }
  // }
  render(){ 
    const {europe}= this.state;
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
        

      {/* <Route path={"/africa"}>
        <Africa />
      </Route>

      <Route path={"/america"}>
        <America />
      </Route>

      <Route path={"/asia"}>
        <Asia />
      </Route>

      <Route path={"/europe"}>
        <Europe />
      </Route>

      <Route path={"/oceania"}>
        <Oceania />
      </Route> */}

      </Routes>
      </div>
    </Router>
    )
  };

  
}

export default App;
