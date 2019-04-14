import React from 'react';
import { Logout, Envelope, Avatar } from 'components/icons';
import './__styles__/navBar.scss';

const NavBar = () => (
  <div className="navbar">
    <ul>
      <div className="left-items">
        <li>
          <a href="#home">
            <Envelope />
            <span>Epic Mail</span>
          </a>
        </li>
      </div>
      <div className="right-items">
        <li>
          <a className="active" href="#profile">
            <Avatar />
          </a>
        </li>
        <div className="vertical-divider" />
        <li>
          <a className="active" href="/">
            <Logout />
          </a>
        </li>
      </div>
    </ul>
  </div>
);

export { NavBar };
