import React from "react";

class Wrapper extends React.Component {
   render(){
       return (
           <div style = {{ margin : '0 auto', height : '100px', border : '1px solid green'}}>             
              {this.props.children}
           </div>
       )
   }
}

export default Wrapper;