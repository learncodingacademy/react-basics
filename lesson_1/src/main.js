import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

const Greet = (props) => {
  return React.createElement('div', null, [
      React.createElement('h1', null, `hello ${props.firstName}!`), 
      React.createElement('h1', null, `hello ${props.lastName}!`) 
    ])         
}


Greet.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool
};

ReactDOM.render( 
    React.createElement(Greet, {firstName: 'John', lastName : 'Doe', isAdmin : "true"})  
    ,rootElement
 )

 /**
  * object
  * array
  * number
  * onOf
  * shape
  */

  //https://reactjs.org/docs/typechecking-with-proptypes.html