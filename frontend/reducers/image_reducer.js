import {ImageConstants} from '../actions/image_actions';
import merge from 'lodash/merge';



const ImageReducer = (state = {} , action ) =>  {
  var success, error;
  var newState;
  switch (action.type) {
    case ImageConstants.RECEIVE_AN_IMAGE:
      newState = action.image;
      return merge({}, newState, newState);
    case ImageConstants.RECEIVE_IMAGES:
      newState = action.images;
      return merge({}, newState, newState);
    default:
      return state;
  }
};

export default ImageReducer;
