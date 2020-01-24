import React from 'react';
import { Link } from 'react-router-dom';
import './form.css';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmpassword: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted form");

    const data = this.state;
    console.log(data);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="form-container px-5 py-3 my-auto rounded">

          <h1 className="title display-4 mx-auto">Grade Wizard</h1>

          <form onSubmit={this.handleSubmit}>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="input form-control my-2"
              autofill="false"
              value={this.state.name}
              onChange={this.handleChange}/>

            <input
              id="email"
              type="email"
              placeholder="Email"
              className="input form-control my-2"
              autofill="false"
              value={this.state.email}
              onChange={this.handleChange}/>

            <input
              id="password"
              type="password"
              autofill="false"
              placeholder="Password"
              className="input form-control my-2"
              value={this.state.password}
              onChange={this.handleChange}/>

            <input
              id="confirmpassword"
              type="password"
              autofill="false"
              placeholder="Confirm password"
              className="input form-control my-2"
              value={this.state.confirmpassword}
              onChange={this.handleChange}/>

            <button
              className="rounded btn btn-lg btn-block action-button my-4"
              onClick={this.handleSubmit}>
              Sign up
            </button>
          </form>

          <p className="hint-text">
            Already have an account?
            <Link className="mx-1" to="/login">Log in.</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Signup;
