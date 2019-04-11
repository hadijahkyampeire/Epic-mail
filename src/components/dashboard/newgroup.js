import React from 'react';
import { UserGroups } from 'components/icons';

class CreateNewGroup extends React.Component {
  render() {
    return (
      <section className="dashboard">
        <header>
          {' '}
          <UserGroups /> UserGroups
        </header>
        <hr />
        <label>Group Name</label>
        <input className="text" type="text" />
        <button> Create Group</button>
      </section>
    );
  }
}
export { CreateNewGroup };
