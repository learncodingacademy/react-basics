import React from "react";


class Test extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
       return(
       <div>
            <input ref = {(el)=> {
                this.input = el;
            }} defaultValue = "sdsd" />
            
            <button onClick ={()=> {                
                  this.input &&  this.props.doSmt(this.input.value) 
            }} >
             Click
             </button>

        </div>)
    }
}

export default Test;