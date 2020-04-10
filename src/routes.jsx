import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import isAuthenticated from '~/store/selectors/auth';

import Default from './layouts/Default';

import SistemaList from './pages/Sistema/List';
import SistemaCreate from './pages/Sistema/Create';
import SistemaView from './pages/Sistema/View';

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

const PrivateRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const isAuth = useSelector(isAuthenticated);

  return (
    <Route {...rest}>
      { isAuth ? children : (
        <Redirect to={{ pathname: '/auth/login', state: { from: location } }} />
      )}
    </Route>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

const GuestRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const isAuth = useSelector(isAuthenticated);

  return (
    <Route {...rest}>
      { isAuth ? (
        <Redirect to={{ pathname: '/', state: { from: location } }} />
      ) : children }
    </Route>
  );
};

GuestRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute exact path="/">
            <Default title="Lista de sistemas">
              <SistemaList />
            </Default>
          </PrivateRoute>
          <GuestRoute exact path="/auth/login">
            <Login />
          </GuestRoute>
          <GuestRoute exact path="/auth/register">
            <Register />
          </GuestRoute>
          <Route exact path="/create">
            <Default
              title="Novo sistema"
              breadcrumbs={[
                { breadcrumbTitle: 'Lista de sistemas', link: '/' },
              ]}
            >
              <SistemaCreate />
            </Default>
          </Route>
          <Route exact path="/view/:id">
            <Default
              title="Ver sistema"
              breadcrumbs={[
                { breadcrumbTitle: 'Lista de sistemas', link: '/' },
              ]}
            >
              <SistemaView />
            </Default>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
