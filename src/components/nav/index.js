import React from 'react';
import { NavCol } from './navCol';
import { NavBar } from './authenticatedNavBar';

const EpicNav = ({ children }) => (
  <React.Fragment>
    <NavBar />
    <NavCol />
    {children}
  </React.Fragment>
);
export { EpicNav };
