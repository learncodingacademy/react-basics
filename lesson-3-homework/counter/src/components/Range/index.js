import React, {Component} from 'react';
import './style.css';

class Range extends Component{
	constructor(props) {
    super(props);
    	this.state = {
    		minvalue : 0,
    		maxvalue : 10
     	};
    }

	handleChange = (event) => {
		this.setState({
			minvalue : event.target.minvalue,
			maxvalue : event.target.maxvalue
		});
	}

	render() {
	    return (
	      <div className="checkBox">
	      	<label>Max
	      		<input type="text" className = 'input' maxvalue={this.state.maxvalue} onChange={this.handleChange}/>
	      	</label>
	      	<label>Min
	      		<input type="text" className = 'input' minvalue={this.state.minvalue} onChange={this.handleChange} />
	      	</label>
	      </div>
	    );
	}
}

export default Range;