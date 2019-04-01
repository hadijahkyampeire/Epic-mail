import React from 'react';
import SignUp from './signup';
import Login from './login';
import Overlay from './overlay';
import './__styles__/index.scss';

export const LandingContainer = () => (
  <div className="container" id="container">
    <div className="form-container sign-up-container">
      <SignUp />
    </div>
    <div className="form-container sign-in-container" />
    <Login />
    <div className="overlay-container">
      <Overlay />
    </div>
  </div>
);
