import {ImageConstants, receiveAnImage} from '../actions/image_actions';
import * as API from '../util/image_api_util';

const ImageMiddleware = ({getState, dispatch}) => (next) => (action) => {
  var success;
  switch (action.type) {
    case ImageConstants.POST_IMAGE:
        success = (cloud_url) => dispatch(receiveAnImage(cloud_url));
        var user_id = window.currentUser.id;
        var cloud_url = action.cloud_url;
        const toSend = {image: {user_id: user_id, cloud_url: cloud_url}};
        API.postImage(toSend, success);
      break;
    default:
      next(action);
  }
};

export default ImageMiddleware;
