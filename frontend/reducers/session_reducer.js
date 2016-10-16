import {SessionConstants, receiveCurrentUser, receiveErrors} from '../actions/session_actions';
import {FollowConstants} from '../actions/follow_actions';

import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  var newState;
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      newState = {currentUser: action.user};
      return merge({}, newState, state);
    case SessionConstants.RECEIVE_ERRORS:
      newState = {errors: action.errors};
      return merge({}, newState, state);
    case FollowConstants.FOLLOW:
      newState = merge({}, state);
      newState.currentUser.following.push(action.userName);
      return newState;
    case FollowConstants.UNFOLLOW:
      newState = merge({}, state);
      var index = state.currentUser.following.indexOf(action.userName);
      newState.currentUser.following.splice(index, index);
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
