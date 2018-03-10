import React from "react";

class Wrapper extends React.Component {
   render(){
       return (
	           <div style = {{ 
	           	margin : '0 auto',
	           	height : '110px',
	           	fontWeight : 'bold',
	           	fontStyle: 'italic',
	           	backgroundColor : 'black'
	           }}>             

              {this.props.children}
              {this.props.image}
           </div>
       )
   }
}

export default Wrapper;