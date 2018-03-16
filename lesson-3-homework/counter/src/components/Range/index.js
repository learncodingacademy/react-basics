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
	      <div className="rangeBox">
	      	<label>Min
	      		<input type="text" maxLength='2' className='inputText' value={this.state.minvalue} onChange={this.handleMin} />
	      	</label>
	      	<label>Max
	      		<input type="text" maxLength='2' className='inputText' value={this.state.maxvalue} onChange={this.handleMax}/>
	      	</label>
			<button className = 'btn btn-primary btn-sm' onClick = {()=> {
                this.props.setRange(this.state);
			}}>
			Set range
			</button>  
	      </div>
	    );
	}
}

export default Range;