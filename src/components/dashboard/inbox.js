import React from 'react';
import { InBox, Delete } from 'components/icons';
import './__styles__/inbox.scss';

class InboxEmails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  };

  toggleHoverState = state => {
    return {
      isHovering: !state.isHovering
    };
  };
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
                <td onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                  <input type="checkbox" name="vehicle1" value="Bike" />
                  <p>I have a bike</p>
                  {this.state.isHovering && <Delete />}
                </td>
              </tr>
              <tr>
                <td onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                  <input type="checkbox" name="vehicle1" value="Bike" />
                  <p>Email two</p>
                  {this.state.isHovering && <Delete />}
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
