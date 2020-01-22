import React from 'react';
import './App.css';
import Class from './Class';
import Login from './Login';
import Mainpage from './Mainpage';
import Signup from './Signup';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className = "App">
        <Nav />

        <Route path = "/Class" component = {Class}/>
        <Route path = "/Login" component = {Login}/>
        <Route path = "/Mainpage" component = {Mainpage}/>
        <Route path = "/Signup" component = {Signup}/>

      </div>
    </Router>
  );
}

export default App;
