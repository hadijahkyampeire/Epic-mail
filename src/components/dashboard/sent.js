import React from 'react';
import { Sent } from 'components/icons';

class SentEmails extends React.Component {
  render() {
    return (
      <section className="dashboard">
        <div className="inbox">
          <header>
            {' '}
            <Sent /> Sent
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
export { SentEmails };