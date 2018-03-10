import React, {Component} from "react";

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : 'John',
            count : 1
        }
        this.testVar = "Initial var state"
    }

    componentDidMount(){

    console.log('componentDidMount');

       setInterval( ()=> { 
          this.setState({count : this.state.count + 1})
          this.testVar = Math.random();
        }, 4000 )        
    }

    componentDidUpdate(){
      console.log('comopnentDidUpdate');
    }

    render() { 
        console.log('render');
        return(
            <div>
                Hi {this.state.name}
                <br/>
                <code>{this.testVar}</code>
                <h2>{this.state.count}</h2>
            </div>
        ) 
    }
}

export default Timer;