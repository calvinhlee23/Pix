import {SessionConstants, receiveCurrentUser, receiveErrors} from '../actions/session_actions';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  console.log('hello from reducer');
  console.log(action.user);
  console.log(action.type);
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      state.currentUser = action.user;
      console.log('hi from reducer');
      console.log(action.user);
      return state;
    case SessionConstants.receiveErrors:
      state.errors.push(action.errors);
      return state;
    default:
      return state;
  }
};

export default SessionReducer;
