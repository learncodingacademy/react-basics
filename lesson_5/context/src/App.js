import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//props
class B extends Component {
  render(){
      return <div>
        <h1>{this.props.name}</h1>
      </div>
  }
}


class A extends Component {
   render() {
      return(
        <div>
          <B name = {this.props.name}/>
        </div>
      )
   } 
}


class App extends Component {


  render() {
    return (
      <div>
         <A name = {"John"} />
      </div>
    );
  }
}

export default App;
