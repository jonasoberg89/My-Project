import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Pages from '../pages';

const routes = (
  <Router>
    <Switch>
      <Route path="/" exact component={Pages.Home} />
      <Route path="/about" exact component={Pages.About} />
      <Route path="/contact" exact component={Pages.Contact} />
      <Route path="/user:id" exact component={Pages.Userpage} />
    </Switch>
  </Router>
);

export default routes;