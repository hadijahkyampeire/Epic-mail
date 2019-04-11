import React from 'react';
import { InBox } from 'components/icons';
import './__styles__/inbox.scss';

class InboxEmails extends React.Component {
  render() {
    return (
      <section className="dashboard">
        <div className="inbox">
          <header>
            {' '}
            <InBox /> Inbox
          </header>
          <hr />
          <div className="inbox-body">
            <table>
              <tr>
                <th>Inbox messages</th>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="vehicle1" value="Bike" />
                  <p>I have a bike</p>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="vehicle1" value="Bike" />
                  <p>I have a bike</p>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="vehicle1" value="Bike" />
                  <p>I have a bike</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    );
  }
}
export { InboxEmails };
