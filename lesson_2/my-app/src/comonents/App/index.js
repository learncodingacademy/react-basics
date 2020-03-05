import React, { Component } from 'react';
import logo from "../../logo.svg"
import Greet from "../Greet";
import Wrapper from "../Wrapper";
import Timer from "../Timer";
import './App.css';

const Img = ()=> <img src={logo} className="App-logo" alt="logo"/>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Img/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Timer/>
        <Wrapper image = {React.createElement(Img)}>
          <Greet name = {'John'} age = {25}/>
        </Wrapper>
      </div>
    );
  }
}

export default App;
