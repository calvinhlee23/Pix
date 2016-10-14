import {UserConstants, receiveTargetUser} from '../actions/user_actions';
import * as USER_API from '../util/user_api_util';
import {FollowConstants} from '../actions/follow_actions';
import * as FOLLOW_API from '../util/follow_api_util';

const UserMiddleware = ({getState, dispatch}) => (next) => (action) => {
  var success, error;
  switch (action.type) {
    case UserConstants.REQUEST_TARGET_USER:
      success = (data) => {dispatch(receiveTargetUser(data));};
      error = () => {dispatch(receiveTargetUser({}));};
      USER_API.requestTargetUser(action.userName, success, error);
      return next(action);

    case FollowConstants.FOLLOW:
      success = (data) => {
          dispatch(receiveTargetUser(data));
          window.location.reload();
      };
      FOLLOW_API.followRequest(action.type, action.userName, success);
      return next(action);

    case FollowConstants.UNFOLLOW:
      success = (data) => {
        dispatch(receiveTargetUser(data));
        window.location.reload();
      };
      FOLLOW_API.followRequest(action.type, action.userName, success);
      return next(action);
    default:
      return next(action);
  }
};

export default UserMiddleware;
