import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ImageReducer from './image_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  images: ImageReducer,
  targetUser: UserReducer
});

export default RootReducer;
