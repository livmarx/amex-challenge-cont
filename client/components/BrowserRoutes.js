import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import SearchBarsId from './SearchBarsId';
import SearchBars from './SeachBars';

const BrowserRoutes = () => {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/wideSearch" component={SearchBars} />
          <Route exact path="/idSearch" component={SearchBarsId} />
        </Switch>
      </main>
    </div>
  );
};

export default BrowserRoutes;
