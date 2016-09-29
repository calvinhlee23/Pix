import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ImageReducer from './image_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  image: ImageReducer
});

export default RootReducer;
