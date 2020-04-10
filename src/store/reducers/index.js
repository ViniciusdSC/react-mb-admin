import { combineReducers } from 'redux';

import auth from './auth';
import system from './system';

export default combineReducers({
  auth,
  system,
});
