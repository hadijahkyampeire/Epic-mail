import React from 'react';
import { Link } from 'react-router-dom';

import { FaceBook, Linkedin, Google } from 'components/icons';
import './__styles__/signup.css';

class SignUp extends React.Component {
  render() {
    return (
      <form className="form-signup">
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#!" className="social">
            <FaceBook />
          </a>
          <a href="#!" className="social">
            <Linkedin />
          </a>
          <a href="#!" className="social">
            <Google />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Link to="/login">Already registered?</Link>
        <Link to="/login">
          <button>Sign Up</button>
        </Link>
      </form>
    );
  }
}
export { SignUp };
