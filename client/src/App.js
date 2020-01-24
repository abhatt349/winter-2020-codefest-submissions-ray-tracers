import React from 'react';
import './App.css';
import Class from './Class';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className = "App">
        <Nav />
          <Switch>
            <Route path = "/Class" 
              component = {Class}
            />
            <Route path = "/Login" 
              component = {Login}
            />
            <Route path = "/Home" 
              component = {Home}
            />
            <Route path = "/Signup" 
              component = {Signup}
            />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
