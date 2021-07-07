import React, {Component} from 'react';
import './style.css';

class CheckBox extends Component{
	constructor(props){
		super(props);
		this.isEven = props.isEven;
		this.isOdd = props.isOdd;
		this.stepCheck = props.step
	}

	setEven = () => {
		const isEven = this.isEven;
		this.isEven = !isEven
	}

	setOdd = () => {
		const isOdd = this.isOdd;
		this.isOdd = !isOdd
	}

	handleEven = () => this.stepCheck.value = 2;
	handleOdd = () => this.stepCheck.value = 3

	render(){
		return(
			<div className = "checkBox">
				<label>Even
					<input type="checkBox" checked = {this.isEven} onClick={this.setEven} onChange={this.handleEven} className = 'inputCheck' />
				</label>
				<label>Odd
					<input type="checkBox" checked = {this.isOdd} onClick={this.setOdd} onChange={this.handleOdd} className = 'inputCheck' />
				</label> 
				<button className = 'btn btn-light btn-sm' onClick = {()=> {
	                this.props.setCheckBox(this.state);
				}}>
				Set type
				</button> 
			</div>	
		)
	}
}

export default CheckBox;