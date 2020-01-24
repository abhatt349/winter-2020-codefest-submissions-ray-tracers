import React from 'react';
import './App.css';
import Class from './Class';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Nav/>
            <Switch>
              <Route
                exact path="/class"
                component={Class}/>
              <Route
                exact path="/login"
                component={Login}/>
              <Route
                exact path="/home"
                component={Home}/>
              <Route
                exact path="/signup"
                component={Signup}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
