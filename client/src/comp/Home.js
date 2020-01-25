import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logoutUser } from '../actions/authActions';
import PropTypes from 'prop-types';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1 className="display-4">home</h1>
        <button className="btn btn-primary" onClick={this.props.logoutUser}>log out</button>
      </>
    );
  }
}

Home.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Home));
