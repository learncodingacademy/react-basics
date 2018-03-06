import React from "react";
import PropTypes from "prop-types";

const propTypes = { name : PropTypes.string };

const styles = {
    backgroundColor : "red",
}

const Greet = ({name})=> <div style ={styles}>
         Hi  {name} 
         <div> Lopren ipsum </div>  
</div>

Greet.propTypes = propTypes;

export default Greet;

