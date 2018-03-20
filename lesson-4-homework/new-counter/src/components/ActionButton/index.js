import React from 'react';

const ActionButton = ({actionHandler, sign, classSequnace}) => {
   return (
      <button type="button" className = {classSequnace} onClick = {actionHandler}>
	  	{sign}
	  </button>
	)
}

export default ActionButton;