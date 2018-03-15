import React, {Component} from 'react';
import './style.css';

class Range extends Component{
	constructor(props) {
    super(props);
    	this.state = {
    		minvalue : props.min,
    		maxvalue : props.max
     	};
    }

	handleMin = ({target}) => {
		this.setState({minvalue : +target.value});
	}
	
	handleMax = ({target}) => this.setState({maxvalue : +target.value});

	render() {
	    return (
	      <div className="checkBox">
	      	<label>Max
	      		<input type="text" className = 'input' value={this.state.maxvalue} onChange={this.handleMax}/>
	      	</label>
	      	<label>Min
	      		<input type="text" className = 'input' value={this.state.minvalue} onChange={this.handleMin} />
	      	</label>
			<button onClick = {()=> {
                this.props.setRange(this.state);
			}}>
			set range
			</button>  
	      </div>
	    );
	}
}

export default Range;