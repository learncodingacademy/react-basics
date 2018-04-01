import React, { Component } from 'react';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Page from "./Page";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Nav/>
          <Switch>
            <Route exact path='/' component={Home}/> 
            <Route path = '/about' component = {About} />
            <Route path = '/contact' render = {()=> (
              <div>
                <Contact email = {"test@test.com"}/>
              </div>)}
            /> 
            <Route path = "/page" render = {()=> <Page/> } />  
            <Route render =  {()=> <p>page not found</p> } />
          </Switch> 
        </React.Fragment>   
      </Router>
    );
  }
}

export default App;
