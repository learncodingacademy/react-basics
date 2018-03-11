import React, {Component} from 'react';

class Clock extends Component {
	constructor(props){
		super(props);
		this.state = {
			value : 0
		};
		this.title = "Number is" 
	}

componentDidMount() {
	setInterval(()=>{
		this.setState({value : this.state.value+1});
	},1000)
}

render(){
		return(
			<div>
			    <h1>{this.title}</h1>
			    <h2>{this.state.value}</h2>
		    </div>
		)
	}
}

export default Clock;