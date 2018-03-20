import React, {Component} from 'react';
import Range from '../Range';
import CheckBox from '../CheckBox';
import ActionButton from '../ActionButton';
import './style.css';

class Main extends Component{
	constructor(props){
    	super(props);
		this.count = 0;
		this.showRange = false;
		this.showCheckBox = false;
		this.max = 10;
		this.min = 0;
		this.isEven = false;
		this.isOdd = false;
		this.step = 1 
	}

	onClickShowRange = () => {
	    this.showRange = !this.showRange
	}

	onClickShowCheckBoxCont = () => {
	    this.showCheckBox = !this.showCheckBox
	}

	handleClickIncrement = () => {
		const newCount = this.count;
		this.count = newCount + this.step;
		if (newCount === this.max) {
			alert("The max value is: " + this.max );
			this.count = this.max
		}
	}

	handleClickDecrement = () => {
		const newCount = this.count;
		this.count = newCount - this.step;
		if (newCount === this.min) {
			alert("The min value is: " + this.min);
			this.count = this.min
		}
	}

	handleClickReset = () => {
		this.step = 1;
		this.count = 0;
		this.showRange = false;
		this.showCheckBox = false;
		this.max = 10;
		this.min = 0
	}

	setRange = ({minvalue, maxvalue}) => {
		if (maxvalue <= minvalue) {
			alert("(-_-) Enter correct range! (o_O)")
		}else{
			this.min = minvalue;
			this.max = maxvalue;
			this.count = minvalue
		}
	}

  	setCheckBox = ({stepCheck}) => {
  		const even = this.isEven;
  		const count = this.count;
  		if (even && count % 2 === 0){
  			console.log(this.count);
  			this.step = stepCheck
  		}else{
  			console.log(this.state.count);
  			this.step = stepCheck
  		}
	  }
	  
	 //TODO: implement! 
	 renderRange = () =>  {
  
	 }

    render() {
		return (
			<div>
				<h1>{this.count}</h1>
				<ActionButton actionHandler = {this.handleClickDecrement} sign = {"-"} classSequnace = {"btn btn-light"} />
				<ActionButton actionHandler = {this.handleClickReset} sign = {"RESET"} classSequnace = {"btn btn-light"} />
				<ActionButton actionHandler = {this.handleClickIncrement} sign = {"+"} classSequnace = {"btn btn-light"} />
				<ActionButton actionHandler = {this.onClickShowRange} sign = {"Range"} classSequnace = {"smallBtn"} />
				<ActionButton actionHandler = {this.onClickShowCheckBoxCont} sign = {"Type"} classSequnace = {"smallBtn"} />
				
				{/*this.renderRange*/}
				{
					this.showRange && <Range 
							 	setRange = {this.setRange} 
							 	min = {this.min}
								max = {this.max}
							 />
				}
				{
					this.showCheckBox && <CheckBox 
							setCheckBox = {this.setCheckBox}
							isEven = {this.isEven}
							isOdd = {this.isOdd}
					/>
				}
			</div>
    );
  }
}

export default Main;