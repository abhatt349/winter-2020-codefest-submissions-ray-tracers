import React from 'react';
import './App.css';
import screens from './comp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import PrivateRoute from './comp/PrivateRoute';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);

  const decoded = jwt_decode(token);

  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());

    window.location.href = "./login";
  }
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={screens.Home}/>
            <Route exact path="/login" component={screens.Login}/>
            <Route exact path="/signup" component={screens.Signup}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}



export default App;
