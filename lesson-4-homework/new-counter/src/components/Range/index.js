import React, {Component} from 'react';
import './style.css';

class Range extends Component{
	constructor(props) {
    super(props);
    	this.minvalue = props.min;
    	this.maxvalue = props.max
    }

	handleMin = () => {
		this.minvalue = this.minvalue.value;
	}
	
	handleMax = () => {
		this.maxvalue = this.maxvalue.value;;
	}
	render() {
	    return (
	      <div className="rangeBox">
	      	<label>Min
	      		<input type="text" maxLength='2' defaultValue="0" className='inputText' ref={(input) => this.minvalue = input} onChange={this.handleMin} />
	      	</label>
	      	<label>Max
	      		<input type="text" maxLength='2' defaultValue="10" className='inputText' ref={(input) => this.maxvalue = input} onChange={this.handleMax}/>
	      	</label>
			<button className = 'btn btn-light btn-sm' onClick = {()=> {
                this.props.setRange(this.state);
			}}>
			Set range
			</button>  
	      </div>
	    );
	}
}

export default Range;