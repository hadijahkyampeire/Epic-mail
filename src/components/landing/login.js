import React from 'react';
import { FaceBook, Linkedin, Google } from 'components/icons';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <form action="#">
        <h1>Sign in</h1>
        <div className="social-container">
          <Link to="#" className="social">
            <FaceBook />
          </Link>
          <a href="#" className="social">
            <Linkedin />
          </a>
          <a href="#" className="social">
            <Google />
          </a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button onClick={this.changePanel}>Sign In</button>
      </form>
    );
  }
}
export default Login;
