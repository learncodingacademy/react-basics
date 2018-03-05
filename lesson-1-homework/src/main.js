import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const rootElement = document.getElementById('root');

const myFirstComponent = (props)=>{
	const {name,age,gender,isAlive} = props;
	return React.createElement('div',null,[
		React.createElement('p',null,`The name is: ${name}`),
		React.createElement('p',null,`The age is: ${age}`),
		React.createElement('p',null,`The gender is: ${gender}`),
		React.createElement('p',null,`Alive: ${isAlive}`),
		React.createElement('p',null,`----------------------------`)
	])
}

const mySecondComponent = ()=>{
	return React.createElement('div',null,[
		React.createElement(myFirstComponent,{name:"Jon",age:20,gender:'male',isAlive: true}),
		React.createElement(myFirstComponent,{name:"Jane",age:25,gender:'female',isAlive: true}),
		React.createElement(myFirstComponent,{name:"Jim",age:20,gender:'male',isAlive: false}),
	])
}

myFirstComponent.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	gender: PropTypes.oneOf(['male','female']).isRequired,
	isAlive: PropTypes.bool
}

ReactDOM.render(
	React.createElement(mySecondComponent),
	rootElement
)