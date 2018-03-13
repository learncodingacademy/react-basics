import React, {Component} from 'react';

class Clock extends Component {
	constructor(props){
		super(props);
		this.state = {
			second : 0,
			minute : 0,
			hour : 0
		};
		this.title = "You opened this page";
		this.clearTimer = this.clearTimer.bind(this);
	}

handleClock(){
	if (this.state.second === 60) {
		this.setState({second : 0});
		this.setState({minute : this.state.minute + 1})
	}else if (this.state.minute === 60) {
		this.setState({minute : 0});
		this.setState({hour : this.state.hour + 1})
	}
}

clearTimer(){
	this.setState({second : 0});
	this.setState({minute : 0});
	this.setState({hour : 0})
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

export default Clock;