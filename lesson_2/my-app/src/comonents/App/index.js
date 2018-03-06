import React, { Component } from 'react';
import logo from "../../logo.svg"
import Greet from "../Greet";
import Wrapper from "../Wrapper";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Wrapper>
          <Greet name = {'John'}/>
        </Wrapper>
      </div>
    );
  }
}

export default App;
