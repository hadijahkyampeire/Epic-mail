import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { LandingContainer, Login, SignUp } from 'components/landing';
import { EpicNav } from 'components/nav';
import { InboxEmails, SentEmails, DraftEmails, CreateNewGroup, Group } from 'components/dashboard';
import './app.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <EpicNav />
          <main className="authenticated">
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={SignUp} />
              <Route path="/dashboard" component={InboxEmails} />
              <Route path="/sent" component={SentEmails} />
              <Route path="/drafts" component={DraftEmails} />
              <Route path="/new" component={CreateNewGroup} />
              <Route path="/group" component={Group} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
