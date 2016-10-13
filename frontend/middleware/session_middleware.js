import * as SESSION_API from '../util/session_api_util';
import * as FOLLOW_API from '../util/follow_api_util';

import {SessionConstants, receiveCurrentUser,
        receiveErrors} from '../actions/session_actions';

import {FollowConstants, processFollow} from '../actions/follow_actions';

const SessionMiddleware = ({getState, dispatch}) => (next) => (action) => {
  var success, error;
  switch (action.type) {
    case SessionConstants.LOG_OUT:
      success = () => {
        next(action);
        window.location.reload();
        };
      error = (data) => dispatch(receiveErrors(data));
      SESSION_API.logout(success, error);
      break;

    case SessionConstants.SIGN_UP:
      success = (data) => {
        dispatch(receiveCurrentUser(data));
        window.location.reload();
        };
      error = (data) => dispatch(receiveErrors(data));
      SESSION_API.signup(action.user, success, error);
      return next(action);

    case SessionConstants.LOG_IN:
      success = (data) => {
        dispatch(receiveCurrentUser(data));
        window.location.reload();
      };
      error = (data) => {
        window.alert("Email/Password Combination not found!");
        dispatch(receiveErrors(data));
      };
      SESSION_API.login(action.user, success, error);
      return next(action);

    default:
      return next(action);

  }
};

export default SessionMiddleware;
