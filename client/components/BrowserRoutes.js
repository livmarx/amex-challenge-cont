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
          <Route exact path="/general-search" component={SearchBars} />
          <Route exact path="/advanced-search" component={SearchBarsId} />
        </Switch>
      </main>
    </div>
  );
};

export default BrowserRoutes;
