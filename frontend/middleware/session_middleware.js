import * as API from '../util/session_api_util';
import {SessionConstants, receiveCurrentUser, receiveErrors} from '../actions/session_actions';

const SessionMiddleware = ({getState, dispatch}) => (next) => (action) => {
  var success, error;
  console.log('hello from middle');
  console.log(action.type);
  switch (action.type) {
    case SessionConstants.LOG_OUT:
      success = next(action);
      error = (data) => dispatch(receiveErrors(data));
      API.logout(success, error);
      break;

    case SessionConstants.SIGN_UP:
      success = (data) => dispatch(receiveCurrentUser(data));
      error = (data) => dispatch(receiveErrors(data));
      API.signup(action.user, success, error);
      return next(action);

    case SessionConstants.LOG_IN:
      success = (data) => dispatch(receiveCurrentUser(data));
      error = (data) => dispatch(receiveErrors(data));
      API.login(action.user, success, error);
      return next(action);

    default:
     return next(action);

  }
};

export default SessionMiddleware;
