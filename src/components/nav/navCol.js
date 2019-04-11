import React from 'react';
import { NavLink } from 'react-router-dom';
import { Drafts, Sent, InBox, UserGroups, Add } from 'components/icons';
import { AddEmailModal } from 'components/dashboard';
import './__styles__/navCol.scss';

const Page = ({ Icon, name, to, ...props }) => (
  <NavLink className="navlink" to={to} {...props} exact>
    <Icon size={22} />
    {name}
  </NavLink>
);

const NavCol = () => (
  <div className="navcol">
    <a name="compose" className="btn" href="#open-modal">
      {' '}
      <Add /> Compose Email
    </a>
    <Page Icon={InBox} to="/inbox" name="Inbox" />
    <Page Icon={Sent} to="/sent" name="Sent" />
    <Page Icon={Drafts} to="/drafts" name="Drafts" />
    <Page Icon={UserGroups} to="/new" name="Create New Group" />
    <AddEmailModal />
  </div>
);

export { NavCol };
