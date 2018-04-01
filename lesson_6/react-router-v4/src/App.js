import React, { Component } from 'react';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Page from "./Page";
import Nav from "./Nav";
import User from "./User";
import UserProfile from "./UserProfile";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const isLoggedIn = false;

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Nav isLoggedIn = {isLoggedIn}/>
          <Switch>
            <Route exact path='/' component={Home}/> 
            <Route path = '/about' component = {About} />
            <Route path = '/user/:id/' component = {User} />
            <Route path = '/contact' render = {()=> (
              <div>
                <Contact email = {"test@test.com"}/>
              </div>)}
            /> 
            <Route path = "/page" component = {Page}  />  
            <Route path = "/user-profile" render = {()=> { 
              if(isLoggedIn){
                return <UserProfile name = {"John Doe"}/>
              } 
              return <Redirect to = {"/"}/>
            }}/>
            <Route render =  {()=> <p>page not found</p> } />
          </Switch> 
        </React.Fragment>   
      </Router>
    );
  }
}

export default App;
