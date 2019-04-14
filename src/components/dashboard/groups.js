import React from 'react';

class Group extends React.Component {
  render() {
    return (
      <section className="dashboard">
        <header> Group A</header>
        <hr />
        <label>Group Members(Haddy, Steve, Fred)</label>
        <br />
        <em>Messages</em>
        <input className="text" type="text" />
      </section>
    );
  }
}
export { Group };
