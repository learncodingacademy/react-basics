import React from "react";
import PropTypes from "prop-types";

const propTypes = { 
	name : PropTypes.string.isRequired, 
	age : PropTypes.number.isRequired
};

const styles = {
    backgroundColor : "red",
}

const Greet = ({name,age})=> <div style ={styles}>
        Hi my name is {name} and age is {age} 
        <div> React logo below </div>  
	</div>

Greet.propTypes = propTypes;

export default Greet;

