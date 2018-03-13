import React from "react";


class Counter extends React.Component {

    constructor(){
      super();
      console.error('constructor');
    }

    componentWillMount(){
       console.error('componentWillMount');
    }

    componentDidMount() {
        console.error('componentDidMount');
    }

    componentWillReceiveProps(prevProps, prevState){
        console.error('componentWillReceiveProps');
        console.error('prevProps: ' , prevProps);
        console.error('prevState: ' , prevState);
    }

    shouldComponentUpdate(nextProps, nextState){
        //retrun false
        return true;
    }

      
    render() {
       return(
           <h1>{this.props.count}</h1>
       ) 
    }
}

export default Counter;