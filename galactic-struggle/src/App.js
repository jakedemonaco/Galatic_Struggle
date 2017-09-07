import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Galactic Struggle!</h2>
        </div>

        <div className="board">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>

        <p className="asdf">/Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates amet laborum, id iure quasi consequatur dolor, ex fugiat sed, odio blanditiis et sunt eum dolorem totam eligendi iste eveniet commodi!</p>
        
      
      </div>
    );
  }
}

export default App;
