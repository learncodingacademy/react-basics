import React, {Component} from 'react';
import './style.css';

class Range extends Component{
	constructor(props) {
    super(props);
    	this.minvalue = props.min;
    	this.maxvalue = props.max
    }


	render() {
	    return (
	      <div className="rangeBox">
	      	<label>Min
	      		<input type="text" maxLength='2'  className='inputText' ref={(input) => this.minvalue = input}/>
	      	</label>
	      	<label>Max
	      		<input type="text" maxLength='2'  className='inputText' ref={(input) => this.maxvalue = input}/>
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