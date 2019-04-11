import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LandingContainer } from 'components/landing';
import { EpicNav } from 'components/nav';
import { InboxEmails, SentEmails, DraftEmails, CreateNewGroup } from 'components/dashboard';
import './app.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <EpicNav />
          <main className="authenticated">
            <Switch>
              <Route exact path="/" component={LandingContainer} />
              <Route path="/inbox" component={InboxEmails} />
              <Route path="/sent" component={SentEmails} />
              <Route path="/drafts" component={DraftEmails} />
              <Route path="/new" component={CreateNewGroup} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
