import {SessionConstants, receiveCurrentUser, receiveErrors} from '../actions/session_actions';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  console.log('hello from reducer');
  console.log(action.type);
  console.log(action);
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      console.log("Reducer CORRECT PLACE");
      state.currentUser = action.user;
      return state;
    case SessionConstants.RECEIVE_ERRORS:
      state.errors.push(action.errors);
      return state;
    default:
      console.log('defaulted in reducer');
      return state;
  }
};

export default SessionReducer;
