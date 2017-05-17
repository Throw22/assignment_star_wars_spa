import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import ResourceListContainer from '../containers/ResourceListContainer';
import ResourceShowContainer from '../containers/ResourceShowContainer';

import ScrollToTop from './ScrollToTop';

const NavLinks = () => (
  <div className="NavLinks">
    <NavLink activeClassName="active" exact to="/">
      Home
    </NavLink>{' '}
    <NavLink activeClassName="active" exact to="/resource/films">
      Films
    </NavLink>{' '}
    <NavLink activeClassName="active" to="/resource/people">
      People
    </NavLink>{' '}
    <NavLink activeClassName="active" exact to="/resource/planets">
      Planets
    </NavLink>{' '}
    <NavLink activeClassName="active" exact to="/resource/species">
      Species
    </NavLink>{' '}
    <NavLink activeClassName="active" to="/resource/starships">
      Starships
    </NavLink>
    <NavLink activeClassName="active" to="/resource/vehicles">
      Vehicles
    </NavLink>
  </div>
);

const App = () => (
  <Router>
    <ScrollToTop>
      <NavLinks />

      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route
          path="/resource/:resourceType/:id"
          component={ResourceShowContainer}
        />
        <Route
          path="/resource/:resourceType"
          component={ResourceListContainer}
        />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>

      <NavLinks />
    </ScrollToTop>
  </Router>
);

export default App;
