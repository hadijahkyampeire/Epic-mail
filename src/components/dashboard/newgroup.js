import React from 'react';
import { UserGroups } from 'components/icons';
import './__styles__/newgroup.scss';

class CreateNewGroup extends React.Component {
  render() {
    return (
      <section className="dashboard">
        <header>
          {' '}
          <UserGroups /> UserGroups
        </header>
        <hr />
        <form className="create-group">
          <div className="group-name">
            <em>Group Name</em>
            <input className="text" type="text" placeholder="group name"/>
          </div>
          <div className="group-name">
            <em>Invite members</em>
            <input className="text" type="text" placeholder="Invite by email"/>
          </div>
          <button type="submit"> Create Group and send invites</button>
        </form>
      </section>
    );
  }
}
export { CreateNewGroup };
