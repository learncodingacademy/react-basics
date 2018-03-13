import React, { Component } from 'react';
import reactLogo from '../../assets/logo.svg';
import vueLogo from '../../assets/vue.png';
import angularLogo from '../../assets/angular.png';
import BarTitle from '../Bar';
import Panel from '../Panel';
import Clock from '../Clock';
import Panel2 from "../Panel2";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BarTitle titleName='Main Bar'/>
         <Panel title="React logo">
          <div>
            <img src={reactLogo} className="App-logo" alt="React logo" />
            <p>React: JavaScript library</p> 
          </div>
        </Panel>
        <Panel title="Vue logo" propToRender = {<h1>hi, prop to render </h1>} >
          <div>
            <img src={vueLogo} className="App-logo" alt="Vue logo" />
            <p>Vue: JavaScript framework</p>
          </div>
        </Panel>
         <Panel title="Angular logo">
          <div>
            <img src={angularLogo} className="App-logo" alt="Angular logo" />
            <p>Angular: JavaScript framework</p>
          </div>
        </Panel>

        <Panel2 title = {"test logo"} imageSrc = {require('../../assets/vue.png')} />

        <Clock title = {"some title"}/>
      </div>
    );
  }
}

export default App;
