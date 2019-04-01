import React from 'react';

class Overlay extends React.Component {
  removePanel = () => {
    const container = document.getElementById('container');
    container.classList.remove('right-panel-active');
  };
  addPanel = () => {
    const container = document.getElementById('container');
    console.log(container);
    container.classList.add('right-panel-active');
  };
  render() {
    return (
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button className="ghost" id="signIn" onClick={this.removePanel}>
            Sign In
          </button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button className="ghost" id="signUp" onClick={this.addPanel}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default Overlay;
