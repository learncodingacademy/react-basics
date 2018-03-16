import React, {Component} from 'react';
import Range from '../Range';
import Check from '../Check';
import './style.css';


const ActionButton = ({actionHandler, sign, classSequnace}) => {
   return (
      <button type="button" className = {classSequnace} onClick = {actionHandler}>
	  	{sign}
	  </button>
	)
}

class Main extends Component{
	constructor(props){
    super(props);
	    this.state = {
			count : 0,
			showRange : false,
			showCheck : false,
			max : 10,
			min : 0, 
			isEven : false,
			isOdd : false,
			step : 1 
		}
	}

	onClickShowRange = (e) => {
	    this.setState({
	    	showRange : !this.state.showRange
	    })
	}

	onClickShowCheck = (e) => {
	    this.setState({
	    	showCheck : !this.state.showCheck
	    })
	}

	handleClickIncrement = () => {
		const newCount = this.state.count;
		this.setState({
			count : newCount + this.state.step
		});
		if (newCount === this.state.max) {
			alert("The max value is: " + this.state.max );
			this.setState({
		       count: this.state.max
			})
		}
	}

	handleClickDecrement = () => {
		const newCount = this.state.count;
		this.setState({
			count : newCount - this.state.step
		});
		if (newCount === this.state.min) {
			alert("The min value is: " + this.state.min);
			this.setState({
		 	  count : this.state.min
			})
		}
	}

	handleClickReset = () => {
		this.setState({
			step : 1,
			count : 0,
			showRange : false,
			showCheck : false
		})
	}

	setRange = ({minvalue, maxvalue}) => {
		this.setState({
			min :minvalue,
			max : maxvalue,
			count : minvalue
		})
	}

  	setCheck = ({stepCheck}) => {
  		const even = this.state.isEven;
  		const count = this.state.count;
  		if (even && count % 2 === 0){
  			console.log(this.state.count);
  			this.setState({
  				step : stepCheck
  			})
  		}else{
  			console.log(this.state.count);
  			this.setState({
  				step : stepCheck
  			})
  		}
	  }
	  

	 //TODO: implement! 
	 rednerRange = () =>  {
  
	 }

	 //TODO: reuse  ActionButton
	//TODO: remove methods binding!
    render() {
		return (
			<div className="">
				<h1>{this.state.count}</h1>

				<ActionButton actionHandler = {this.handleClickDecrement} sign = {"-"} classSequnace = {"btn btn-danger"} />
				
				<button type="button" className = "btn btn-warning" onClick = {this.handleClickReset}>Reset</button>
				<button type="button" className = "btn btn-success" onClick = {this.handleClickIncrement}>+</button>

				<button className = "smallBtn btn-secondary" onClick={this.onClickShowRange.bind(this)}>Range</button>
				<button className = "smallBtn btn-secondary" onClick={this.onClickShowCheck.bind(this)}>Type</button>
				{/*this.rednerRange*/}
				{
					this.state.showRange && <Range 
							 	setRange = {this.setRange} 
							 	min = {this.state.min}
								max = {this.state.max}
							 />
				}
				{
					this.state.showCheck && <Check 
							setCheck = {this.setCheck}
							isEven = {this.state.isEven}
							isOdd = {this.state.isOdd}
					/>
				}
			</div>
    );
  }
}

export default Main;