import React from 'react';
import PropTypes from 'prop-types';

const styles = {
	backgroundColor : 'grey',
	border : '2px solid black',
	color : "white",
	fontSize : '20px',
}
 
const Bar = ({titleName})=> (
      <div style = {styles}>
		This is the {titleName}
	 </div>);

Bar.propTypes = {
	titleName : PropTypes.string.isRequired 
}
		
export default Bar;