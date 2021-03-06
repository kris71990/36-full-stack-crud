import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as authActions from '../../actions/authActions';
import * as profileActions from '../../actions/profileActions';
import autoBind from '../../utils/index';
import * as routes from '../../utils/routes';

import AuthForm from '../auth-form/auth-form';

import './landing.scss';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, Landing);
  }

  handleLogin(user) {
    return this.props.login(user)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
        this.props.fetchProfile();
      })
      .catch(console.error);
  }

  handleSignup(user) {
    return this.props.signup(user)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(console.error);
  }

  render() {
    const signupJSX = 
      <div>
        <h2>Signup</h2>
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
        <AuthForm onComplete={this.handleSignup} type="Signup"/>
      </div>;

    const loginJSX = 
      <div>
        <h2>Login</h2>
        <p>No account?</p>
        <Link to="/signup">Signup</Link>
        <AuthForm onComplete={this.handleLogin} type="Login"/>
      </div>;

    const { location } = this.props;

    return (
      <div className="landing">
        { location.pathname === routes.SIGNUP_ROUTE ? signupJSX : undefined }
        { location.pathname === routes.LOGIN_ROUTE ? loginJSX : undefined }
      </div>
    );
  }
}

Landing.propTypes = {
  signup: PropTypes.func,
  login: PropTypes.func,
  fetchProfile: PropTypes.func,
  location: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(authActions.signupRequest(user)),
  login: user => dispatch(authActions.loginRequest(user)),
  fetchProfile: () => dispatch(profileActions.fetchRequestProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
