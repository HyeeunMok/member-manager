import { combineReducers } from "redux";
import members from './members';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
  members,
  errors,
  messages,
  auth
});