import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import './form.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      logged_in: false
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted form");

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user);
    this.setState({ logged_in: true });
  }

  render(){
    const { errors } = this.state;

    return (
      <div className="container-fluid">
        <div className="form-container px-5 py-3 my-auto rounded">

          <h1 className="title display-4 mx-auto">Grade Wizard</h1>

          <form onSubmit={this.handleSubmit}>
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

            <button
              className="rounded btn btn-lg btn-block action-button my-4"
              onClick={this.handleSubmit}>
              Log in
            </button>
          </form>

          <p className="hint-text">
            Don't have an account?
            <Link className="mx-1" to="/signup">Sign up.</Link>
          </p>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
