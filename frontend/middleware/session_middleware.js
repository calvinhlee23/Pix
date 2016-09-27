import {login, logout, signup} from '../util/session_api_util';
import {SessionConstants, receiveCurrentUser, receiveErrors} from '../actions/session_actions';

const SessionMiddleware = ({getState, dispatch}) => (next) => (action) => {
  var success, error;
  switch (action.type) {
    case SessionConstants.LOG_OUT:
      success = next(action);
      error = (data) => dispatch(receiveErrors(data));
      logout(success, error);
      break;

    case SessionConstants.SIGN_UP:
      success = (data) => dispatch(receiveCurrentUser(data));
      error = (data) => dispatch(receiveErrors(data));
      signup(action.user)(success, error);
      return next(action);

    case SessionConstants.LOG_IN:
      success = (data) => dispatch(receiveCurrentUser(data));
      error = (data) => dispatch(receiveErrors(data));
      login(action.user)(success, error);
      return next(action);

    default:
     return next(action);

  }
};

export default SessionMiddleware;
