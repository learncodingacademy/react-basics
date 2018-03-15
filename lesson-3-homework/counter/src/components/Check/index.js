import React, {Component} from 'react';
import './style.css';

class Check extends Component{
	render(){
		return(
			<div className = "checkBox">
				<label>Even
					<input type="checkBox" className = 'input' />
				</label>
				<label>Odd
					<input type="checkBox" className = 'input' />
				</label>
			</div>	
		)
	}
}

export default Check;
