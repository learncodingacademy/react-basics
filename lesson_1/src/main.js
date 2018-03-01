import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");


const paragraph = React.createElement('p', null, 'hellow world');


const MyFirstComopnent = () => React.createElement('h3', null, 'my first component');

const MyFirstComopnent_2 = function(){
   return  React.createElement('h3', null, 'my first component_2');
} 

function MyFirstComopnent_3(){
    return React.createElement('h3', null, 'my first component_3');
}

ReactDOM.render( 
    React.createElement(MyFirstComopnent_3, null)  
    ,rootElement
 )


