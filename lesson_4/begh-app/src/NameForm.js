import React from "react";


export class NameFormUnContolled extends React.Component {
    constructor(props) {
      super(props);
      this.input = null; 
    }

    handleSubmit = (event)=> {
      alert('A name was submitted: ' + this.input.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={(input) => this.input = input} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }


  export class NameFormContolled extends React.Component {
    constructor(props) {
      super(props);
      this.input = null; 
      this.state = {
          inputValue : "",
      }
    }
  
    handleSubmit = (event)=> {
      alert('A name was submitted: ' + this.input.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text"  value = {this.state.inputValue} onChange = { (e)=> {
                 this.setState({inputValue : e.target.value }) 
            }} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }