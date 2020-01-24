import React from 'react';
import './App.css';
import screens from './comp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';

class App extends React.Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={screens.Login}/>
            <Route exact path="/login" component={screens.Login}/>
            <Route exact path="/signup" component={screens.Signup}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
