import React, {Component} from 'react';
import PropTypes from "prop-types";

class Clock extends Component {

static propTypes = {
	title : PropTypes.string.isRequired
}

constructor(props){
	super(props);
	this.state = {
		second : 0,
		minute : 0,
		hour : 0
	};

	this.title = this.props.title; 
}

handleClock(){
	if (this.state.second === 60) {
		this.setState({
			second : 0,
			minute : this.state.minute + 1
		});
	} else if (this.state.minute === 60) {
		this.setState({
			minute : 0});
		this.setState({hour : this.state.hour + 1})
	}
}

clearTimer = () => {
    this.setState({
		second: 0,
		minute : 0,
		hour : 0
	})
}

componentDidMount() {
	setInterval(()=>{
		this.setState({second : this.state.second + 1});
		this.handleClock();
	},1000)
}

render(){
	return(
		<div>
			<h1>{this.title}</h1>
			<h2>{this.state.hour} : {this.state.minute} : {this.state.second} </h2>
			<button onClick = {this.clearTimer} style = {{cursor : "pointer",marginBottom : "20px" }}>Clear</button>
		</div>
		)
	}
}


// Clock.proptypes =  {

// }

export default Clock;