import React from 'react'
import './App.css'
import Textbelowlogin from './Textbelowlogin'
import Loginform from './Loginform'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {}
    };
  }

  onSubmit = (fields) => {
    this.setState({fields});
    console.log('Got: ', fields);
  }

  render(){
    return(
      <div>
        <div className = "loginbox">
          <h1>Grade Wizard</h1>
          <Loginform name = "Email"
          name1 = "Password"
          name2 = "Log In"
          onSubmit = {fields => this.onSubmit(fields)}
          />
          <Textbelowlogin name = "Don't have an account? "
          name1 = "Sign up."
          link = "http://localhost:3000/Signup"
          />
        </div>
      </div>
    );
  }
}

export default Login;
