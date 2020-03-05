import React, {Component} from 'react';
import './style.css';

class Panel2 extends Component {
  render() {
    const {title, imageSrc} = this.props;

    return (
      <div className="panel ">
        <div className="title">{title}</div>
        <div className="image ">
          <img  className = "App-logo" src = {imageSrc} alt = 'logo'/>
        </div>
      </div>
    );
  }
}

export default Panel2;

