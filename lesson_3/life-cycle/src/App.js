import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

 state = {count : 1, random : Math.random()}; 

 componentDidMount(){
   setInterval( ()=> {
     this.setState({count : this.state.count + 1}, ()=> {
       console.log('setState callback cllled');
       console.log(this.state.count);
     });
   }, 1000 );

   setInterval( ()=> {
    this.setState((prevState, props)=> {
      console.warn("prevState", prevState) 

      return {
        random : prevState.random + Math.random()
      }
    });
  }, 2000 );
 }

  render() {

   console.log("redner ", this.state.count)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{this.state.count}</h1>
        <h1>{this.state.random}</h1>
      </div>
    );
  }
}

export default App;
