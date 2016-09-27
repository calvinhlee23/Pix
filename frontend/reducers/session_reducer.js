import {SessionConstants, receiveCurrentUser, receiveErrors} from '../actions/session_actions';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  console.log('this is from reducer');
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      state.currentUser = action.user;
      return state;
    case SessionConstants.receiveErrors:
      state.errors.push(action.errors);
      return state;
    default:
      return state;
  }
};

export default SessionReducer;
