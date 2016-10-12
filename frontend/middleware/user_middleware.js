import {UserConstants, receiveTargetUser} from '../actions/user_actions';
import * as USER_API from '../util/user_api_util';

const UserMiddleware = ({getState, dispatch}) => (next) => (action) => {
  var success, error;

  switch (action.type) {
    case UserConstants.REQUEST_TARGET_USER:
      console.log('correct middleware');
      success = (data) => {dispatch(receiveTargetUser(data));};
      error = () => {dispatch(receiveTargetUser({}));};
      USER_API.requestTargetUser(action.userName, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default UserMiddleware;
