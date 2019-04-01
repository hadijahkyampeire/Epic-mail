import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LandingContainer } from 'components/landing';

class App extends React.Component {
  render() {
    return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingContainer} />
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}
export default App;
