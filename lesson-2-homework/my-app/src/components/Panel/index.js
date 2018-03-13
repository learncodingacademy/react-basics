import React, {Component} from 'react';
import './imageStyle.css';

export default class Panel extends Component {
  render() {
    
    return (
      <div className="panel">
        <div className="title">{this.props.title}</div>
        <div className="image">{this.props.children}</div>
        {this.props.propToRender ? this.props.propToRender : null }
      </div>
    );
  }
}

