import {ImageConstants, receiveAnImage, receiveImages} from '../actions/image_actions';
import {CommentConstants, receiveAComment} from '../actions/comment_actions';
import * as IMAGE_API from '../util/image_api_util';
import * as COMMENT_API from '../util/comment_api_util';

const ImageMiddleware = ({getState, dispatch}) => (next) => (action) => {
  var success, error;

  switch (action.type) {
    case ImageConstants.POST_IMAGE:
        success = (image) => dispatch(receiveAnImage(image));
        var cloud_url = action.cloud_url;
        const toSend = {image: {cloud_url: cloud_url}};
        IMAGE_API.postImage(toSend, success);
      break;

    case ImageConstants.REQUEST_IMAGES:
      success = (data) => {
        dispatch(receiveImages(data));
      };
      error = () => {
        window.alert("Oops, something went wrong!");
      };
      var url = `/api/images/${action.imageType}`;
      IMAGE_API.requestImages(url, success, error);
      break;

    case CommentConstants.POST_COMMENT:
      success = (data) => dispatch(receiveAComment(data));
      COMMENT_API.postAComment(success, action);
      return next(action);
    default:
      next(action);
  }
};

export default ImageMiddleware;
