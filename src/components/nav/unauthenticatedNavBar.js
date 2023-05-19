import React from 'react';
import { Envelope } from 'components/icons';
import './__styles__/navBar.css';

const HomeNavBar = () => (
  <div className="navbar">
    <ul>
      <div className="">
        <li>
          <a href="#home">
            <Envelope />
            <span>Epic Mail</span>
          </a>
        </li>
      </div>
 
    </ul>
  </div>
);

export { HomeNavBar };
