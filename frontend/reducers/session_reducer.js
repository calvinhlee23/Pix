import {SessionConstants, receiveCurrentUser, receiveErrors} from '../actions/session_actions';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      state.currentUser = action.user;
      return state;
    case SessionConstants.RECEIVE_ERRORS:
      state.errors.push(action.errors);
      return state;
    default:
      return state;
  }
};

export default SessionReducer;
