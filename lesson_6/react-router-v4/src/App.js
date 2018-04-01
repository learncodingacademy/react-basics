import React, { Component } from 'react';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Page from "./Page";
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/> 
          <Route path = '/about' component = {About} />
          <Route path = '/contact' render = {()=> (
            <div>
              <Contact email = {"test@test.com"}/>
            </div>)}
          /> 
          <Route path = "/page" render = {()=> <Page/> } />  
        </div>    
      </Router>
    );
  }
}

export default App;
