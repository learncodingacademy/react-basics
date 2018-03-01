import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

const Greet = (props) => {
  return React.createElement('div', null, [
      React.createElement('h1', null, `hello ${props.firstName}!`), 
      React.createElement('h1', null, `hello ${props.lastName}!`) 
    ])         
}

ReactDOM.render( 
    React.createElement(Greet, {firstName: 'John', lastName : 'Doe'})  
    ,rootElement
 )


