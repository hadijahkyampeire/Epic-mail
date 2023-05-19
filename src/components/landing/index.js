import React from 'react';
import { SignUp } from './signup';
import { Login } from './login';
import Overlay from './overlay';
import './__styles__/index.css';

export const LandingContainer = ({ history }) => {
  return (
    <section>
      <h1 className="header">Epic Mail</h1>
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
    </section>
  );
};
export * from './login';
export * from './signup';
