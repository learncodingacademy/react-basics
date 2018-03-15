import React, {Component} from 'react';
import Range from '../Range';
import Check from '../Check';
import './style.css';
  
class Main extends Component{
	constructor(props){
    super(props);
    this.state = {
      count : 0,
      showRange : false,
      showCheck : false
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
			count : newCount + 1
		});
		if (newCount === 10) {
			alert("The max value is: 10");
			this.setState({
			count : 10
			})
		}
	}

	handleClickDecrement = () => {
		const newCount = this.state.count;
		this.setState({
			count : newCount - 1
		});
		if (newCount === -10) {
			alert("The min value is: -10");
			this.setState({
			count : -10
			})
		}
	}

	handleClickReset = () => {
		if (this.state.count === 0) {
			alert("Nothing to reset!");
		}else{
			this.setState({
				count : 0
			})
		}	
	}
  
    render() {
    return (
      <div className="">
        <h1>{this.state.count}</h1>
        <button className = "btn incBtn" onClick = {this.handleClickIncrement}>+</button>
        <button className = "btn resetBtn" onClick = {this.handleClickReset}>Reset</button>
        <button className = "btn decBtn" onClick = {this.handleClickDecrement}>-</button>
        <button className = "smallBtn" onClick={this.onClickShowRange.bind(this)}>Range</button>
        <button className = "smallBtn" onClick={this.onClickShowCheck.bind(this)}>Type</button>
        {this.state.showRange && <Range />}
        {this.state.showCheck && <Check />}
      </div>
    );
  }
}

export default Main;