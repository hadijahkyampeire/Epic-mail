import React from 'react';
import { Drafts } from 'components/icons';

class DraftEmails extends React.Component {
  render() {
    return (
      <section className="dashboard">
        <div className="inbox">
          <header>
            {' '}
            <Drafts /> Drafts
          </header>
          <hr />
          <div className="inbox-body">
          <input type="checkbox" name="vehicle" value="email"/>Its an email one
          <p><input type="checkbox" name="vehicle" value="email"/>Its an email two</p>
          <p><input type="checkbox" name="vehicle" value="email"/>Its an email three</p>
          </div>
        </div>
      </section>
    );
  }
}
export { DraftEmails };