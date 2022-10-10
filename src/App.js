import React, {Component} from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import './App.css';



class App extends Component {
  componentDidMount(){
    document.body.style.backgroundColor = "red"
  }

  render(){
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}
}

export default App;
