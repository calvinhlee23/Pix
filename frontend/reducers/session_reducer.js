import {SessionConstants, receiveCurrentUser, receiveErrors} from '../actions/session_actions';
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
    default:
      return state;
  }
};

export default SessionReducer;
