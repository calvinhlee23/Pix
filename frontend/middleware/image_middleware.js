import {ImageConstants, receiveAnImage, receiveImages} from '../actions/image_actions';
import * as API from '../util/image_api_util';

const ImageMiddleware = ({getState, dispatch}) => (next) => (action) => {
  var success, error;
  switch (action.type) {
    case ImageConstants.POST_IMAGE:
        success = (image) => dispatch(receiveAnImage(image));
        var cloud_url = action.cloud_url;
        const toSend = {image: {cloud_url: cloud_url}};
        API.postImage(toSend, success);
      break;
    case ImageConstants.REQUEST_IMAGES:
      success = (data) => {
        dispatch(receiveImages(data));
      };
      error = () => {
        window.alert("Oops, something went wrong!");
      };
      var url = `/api/images/${action.imageType}`;
      API.requestImages(url, success, error);
    default:
      next(action);
  }
};

export default ImageMiddleware;
