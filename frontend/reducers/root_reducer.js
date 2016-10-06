import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ImageReducer from './image_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  images: ImageReducer
});

export default RootReducer;
