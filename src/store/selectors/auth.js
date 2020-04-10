import { createSelector } from 'reselect';

const isAuthenticated = createSelector(
  (state) => state.auth,
  (auth) => !!auth.token,
);

export default isAuthenticated;
