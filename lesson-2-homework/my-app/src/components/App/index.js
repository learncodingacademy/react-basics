import React, { Component } from 'react';
import reactLogo from '../../assets/logo.svg';
import vueLogo from '../../assets/vue.png';
import angularLogo from '../../assets/angular.png';
import BarTitle from '../Bar';
import Panel from '../ImageBox';
import Clock from '../Clock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={reactLogo} className="App-logo" alt="React logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BarTitle titleName='Main Bar'/>
         <Panel title="React logo">
          <div>
            <img src={reactLogo} className="App-logo" alt="React logo" />
          </div>
        </Panel>
        <Panel title="Vue logo">
          <div>
            <img src={vueLogo} className="App-logo" alt="Vue logo" />
          </div>
        </Panel>
         <Panel title="Angular logo">
          <div>
            <img src={angularLogo} className="App-logo" alt="Angular logo" />
          </div>
        </Panel>
        <Clock />
      </div>
    );
  }
}

export default App;
