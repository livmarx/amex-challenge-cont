import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import SingleBook from './SingleBook';

const BrowserRoutes = () => {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/:bookId" component={SingleBook} />
        </Switch>
      </main>
    </div>
  );
};

export default BrowserRoutes;
