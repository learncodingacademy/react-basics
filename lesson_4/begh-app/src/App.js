import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import {NameFormContolled, NameFormUnContolled} from "./NameForm";


class A extends Component {

   state = {text : "AAAA"}

   change = ()=> {
     this.setState({text: "CCCC"})
   }

   render(){
     return <h1>{this.state.text}</h1>
   }
}

function B(){
  return <h1>BBBBBBBBBBBBB</h1>
} 

class App extends Component {
  componentDidMount() {
    this.elRef.innerText = "innner Text";
    this.el.change()
  }

  render() {
    return (
      <div onClick = { (e)=>{
        console.log("----",e);
        e.persist();
        setTimeout( ()=> {
          console.log(e.type);
        }, 300 );
       
      }} className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p
          ref={el => {
            this.elRef = el;
          }}
          className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NameFormContolled/>
        <br/>
        <br/>
        <NameFormUnContolled/>

        <A ref = { (el) => {
           this.el = el;
        }}/>

        <B  ref = { (elB)=> {
           console.log(elB);
         }}  />

      </div>
    );
  }
}

export default App;
