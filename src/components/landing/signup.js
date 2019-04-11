import React from 'react';
import { FaceBook, Linkedin, Google } from 'components/icons';

class SignUp extends React.Component {
  render() {
    return (
      <form >
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
        <button onClick={this.changePanel}>Sign Up</button>
      </form>
    );
  }
}
export default SignUp;
