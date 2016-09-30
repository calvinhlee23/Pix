import {ImageConstants} from '../actions/image_actions';
import merge from 'lodash/merge';

const defaultState = {
  images: []
};

const ImageReducer = (state = defaultState , action ) =>  {
  var success, error;
  var newState;
  switch (action.type) {
    case ImageConstants.RECEIVE_AN_IMAGE:
      newState = {images: [action.image]};
      return merge({}, newState, newState);
    case ImageConstants.RECEIVE_IMAGES:
      console.log("IM IN the RIGHT REDUCER");
      newState = {images: action.images};
      console.log(newState);
      return merge({}, newState, newState);
    default:
      return state;
  }
};

export default ImageReducer;
