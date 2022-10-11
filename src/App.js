import React,{Component} from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import './App.css';
import {Helmet} from 'react-helmet';



class App extends Component{
  constructor(){
    super()
    this.state ={
        countries:[ITALY, FRANCE, SPAIN, POLAND],
        colors:[{ITALY:'linear-gradient(to right, green, white, red)'}],[{FRANCE:'linear-gradient(to right, blue, white, red)'}]
    }
}
  render(){ 
    return(
    <div className="App">
        <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
        background:#C6D3E6;
      }
    `}</style>
      <Navbar/>
      <Card/>
    </div>
    )
  };
}

export default App;
