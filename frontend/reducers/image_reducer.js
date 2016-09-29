import {ImageConstants} from '../actions/image_actions';

const defaultState = {
  cloud_urls: []
};

const ImageReducer = (state = defaultState , action ) =>  {
  var success, error;

  switch (action.type) {
    case ImageConstants.RECEIVE_AN_IMAGE:
      return state.cloud_urls.push(action.cloud_url);
    default:
      return state;
  }
};

export default ImageReducer;
