import React from 'react';
import PropTypes from 'prop-types';

const styles = {
	backgroundColor : 'grey',
	border : '2px solid black',
	color : "white",
	fontSize : '20px',
}

const BoxTitle = ({titleName})=> <div style = {styles}>
		This is the {titleName}</div>


BoxTitle.propTypes = {titleName : PropTypes.string.isRequired }
		
export default BoxTitle;