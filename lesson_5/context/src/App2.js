import React, { Component } from 'react';
import PropTypes from "prop-types";
import './App.css';

class Button extends React.Component {
    render() {
      return (
          <div>
        <button style={{background: this.context.color}}>
          {this.props.children}
        </button>

          <ul>
              {[78,4,3,4,45].map( (item, index) => {
                  return <li key = {index}> {item} </li>
              })}
          </ul>

        </div>
      );
    }
  }
  

  Button.contextTypes = {
    color: PropTypes.string
  };


  //----------------
  
  class Message extends React.Component {
    render() {
      return (
        <div>
          {this.props.text} 
          <Button>Delete</Button>
        </div>
      );
    }
  }
  
  
  class MessageList extends React.Component {

    getChildContext() {
        return {color: "purple"};
      }

    render() {
      const color = "purple";
      const children = this.props.messages.map((message, index) =>
        <Message key = {index}  text={message.text} color={color} />
      );
      return <div>{children}</div>;
    }
  }

  MessageList.childContextTypes = {
    color: PropTypes.string
  };


  export default MessageList;