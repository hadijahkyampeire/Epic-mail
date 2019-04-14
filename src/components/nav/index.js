import React from 'react';
import { NavCol } from './navCol';
import { NavBar } from './authenticatedNavBar';
import { HomeNavBar } from './unauthenticatedNavBar';

const EpicNav = ({ children }) => (
  <React.Fragment>
    <NavBar />
    <NavCol />
    {children}
  </React.Fragment>
);
export { EpicNav };
