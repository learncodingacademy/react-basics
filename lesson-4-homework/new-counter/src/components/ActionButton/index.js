import React from 'react';

const ActionButton = (props) => {
   const {actionHandler, sign, classSequnace} = props;
   return (
      <button type="button" className = {classSequnace} onClick = {actionHandler}>
	  	{sign}
	  </button>
	)
}

export default ActionButton;