import React from 'react';
import { FaceBook, Linkedin, Google } from 'components/icons';
import { Link } from 'react-router-dom';
import { ResetPassword } from './passwordReset';
import './__styles__/login.css';

class Login extends React.Component {
  handleLogin = () => {
    console.log('clicked');
    this.props.history.push('/inbox');
  };
  render() {
    return (
      <form style={{ width: '51%' }} onSubmit={this.handleLogin} className="form-login">
        <h1>Sign in</h1>
        <div className="social-container">
          <Link to="#!" className="social">
            <FaceBook />
          </Link>
          <a href="#!" className="social">
            <Linkedin />
          </a>
          <a href="#!" className="social">
            <Google />
          </a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Link className="btn" href="#password-modal">
          Forgot your password?
        </Link>
        <Link to="/">Not yet registered?</Link>
        <button>Sign In</button>
        <ResetPassword />
      </form>
    );
  }
}
export { Login };
