import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: "RED",
      boardcolor: "WHITE"
    }

    this.colors = {
      "RED": {
        "hexColor": '#f00'
      },
      "WHITE": {
        "hexColor": '#fff'
      }
    }
  }

  render() {

    const squareStyle = {
      "backgroundColor": typeof this.colors[this.state.color] === 'undefined' ? '#fff' : this.colors[this.state.color].hexColor
    };

    const boardStyle = {
      "backgroundColor": typeof this.colors[this.state.color] === 'undefined' ? '#fff' : this.colors[this.state.boardcolor].hexColor
    }



    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Galactic Struggle</h2>
        </div>

        <div className="row">

          <div className="col-lg-2 playerOneHand">
            <div className="square" onClick = {() => this.setState({color: "WHITE", boardcolor:"RED" })} style={squareStyle}>{this.state.color}</div>
          </div> 
          
          
          
          <div className="col-lg-7">
            <div className="row board-one">
              <div className="square square-id-1" style={boardStyle} ></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
            <div className="row board-two">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
            <div className="row board-three">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
            <div className="row board-four">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
            
          </div> 

          <div className="col-lg-2 playerTwoHand">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div> 

         

        
        </div>

      </div>
    );
  }
}

export default App;
