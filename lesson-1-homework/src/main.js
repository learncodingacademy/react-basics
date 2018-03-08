import React, {createElement} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const rootElement = document.getElementById('root');

const MyFirstComponent = ({name,age,gender,isAlive})=>
	createElement('div',null,[
		createElement('p',null,`The name is: ${name}`),
		createElement('p',null,`The age is: ${age}`),
		createElement('p',null,`The gender is: ${gender}`),
		createElement('p',null,`Alive: ${isAlive}`),
		createElement('p',null,`----------------------------`)
	])

const MySecondComponent = ()=>
	createElement('div',null,[
		createElement(MyFirstComponent,{name:"Jon",age:20,gender:'male',isAlive: true}),
		createElement(MyFirstComponent,{name:"Jane",age:25,gender:'female',isAlive: true}),
		createElement(MyFirstComponent,{name:"Jim",age:20,gender:'male',isAlive: false}),
	])

MyFirstComponent.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	gender: PropTypes.oneOf(['male','female']).isRequired,
	isAlive: PropTypes.bool
}

ReactDOM.render(
	createElement(MySecondComponent),
	rootElement
)