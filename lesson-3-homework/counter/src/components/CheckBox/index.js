import React, {Component} from 'react';
import './style.css';

class CheckBox extends Component{
	constructor(props){
		super(props);
		this.state = {
			isEven : props.isEven,
			isOdd : props.isOdd,
			stepCheck : props.step
		}
	}

	setEven = () => {
		const isEven = this.state.isEven;
		this.setState({
			isEven : !isEven
		})
	}

	setOdd = () => {
		const isOdd = this.state.isOdd;
		this.setState({
			isOdd : !isOdd,
		})
	}

	handleEven = ({target}) => this.setState({stepCheck : 2});
	handleOdd = ({target}) => this.setState({stepCheck : 3})

	render(){
		return(
			<div className = "checkBox">
				<label>Even
					<input type="checkBox" checked = {this.state.isEven} onClick={this.setEven} onChange={this.handleEven} className = 'inputCheck' />
				</label>
				<label>Odd
					<input type="checkBox" checked = {this.state.isOdd} onClick={this.setOdd} onChange={this.handleOdd} className = 'inputCheck' />
				</label> 
				<button className = 'btn btn-light btn-sm' onClick = {()=> {
	                this.props.setCheck(this.state);
				}}>
				Set type
				</button> 
			</div>	
		)
	}
}

export default CheckBox;
