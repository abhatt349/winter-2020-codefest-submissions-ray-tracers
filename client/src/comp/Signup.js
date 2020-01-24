import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './form.css';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmpassword: '',
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.confirmpassword
    }

    console.log(user);

    this.props.registerUser(user, this.props.history);
  }

  render() {
    const { errors } = this.state;
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
            {errors.name ? <span className="text-error lead">{errors.name}</span> : null}

            <input
              id="email"
              type="email"
              placeholder="Email"
              className="input form-control my-2"
              autofill="false"
              value={this.state.email}
              onChange={this.handleChange}/>
            {errors.email ? <span className="text-error lead">{errors.email}</span> : null}

            <input
              id="password"
              type="password"
              autofill="false"
              placeholder="Password"
              className="input form-control my-2"
              value={this.state.password}
              onChange={this.handleChange}/>
            {errors.password ? <span className="text-error lead">{errors.password}</span> : null}

            <input
              id="confirmpassword"
              type="password"
              autofill="false"
              placeholder="Confirm password"
              className="input form-control my-2"
              value={this.state.confirmpassword}
              onChange={this.handleChange}/>
            {errors.password2 ? <span className="text-error lead">{errors.password2}</span> : null}

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

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Signup));
