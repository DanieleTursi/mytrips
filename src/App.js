import React,{Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import './App.css';
import {Helmet} from 'react-helmet';



class App extends Component{
  constructor(){
    super()
    this.state ={
        europe:['AUSTRIA','BELGIUM','BOSNIA & HERZAGOVINA', 'BULGARIA'],
        searchfield:''
    }
}
  render(){ 
    const {europe}= this.state;
    return(
    <div className="App">
        <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
        background:#FFFFFF;
      }
    `}</style>
      <Navbar/>
      <Card europe={europe}/>
    </div>
    )
  };
}

export default App;
