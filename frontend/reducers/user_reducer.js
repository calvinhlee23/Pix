import {UserConstants} from '../actions/user_actions';

const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case UserConstants.RECEIVE_TARGET_USER:
      var newState = action.targetUser;
      return newState;
    default:
      return state;
  }
};


export default UserReducer;
