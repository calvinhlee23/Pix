import {ImageConstants, receiveAnImage, receiveImages} from '../actions/image_actions';
import {CommentConstants, receiveAComment} from '../actions/comment_actions';
import {DeleteConstants, removeComment, removeImage} from '../actions/delete_actions';
import {LikeConstants, receiveLike} from '../actions/like_actions';

import * as IMAGE_API from '../util/image_api_util';
import * as COMMENT_API from '../util/comment_api_util';
import * as DELETE_API from '../util/delete_api_util';
import * as LIKE_API from '../util/like_api_util';

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
      // for targetUser when looking at someone's bio
      if (action.imageType === "userImages") {
        error = () => {
          dispatch(receiveImages({}));
        };
        url = `/api/images/${action.imageType}`;
        IMAGE_API.requestUserImages(url, action.userName, success, error);

      } else {
        IMAGE_API.requestImages(url, success, error);
      }
      return next(action);

    case CommentConstants.POST_COMMENT:
      success = (data) => dispatch(receiveAComment(data));
      COMMENT_API.postAComment(success, action);
      return next(action);

    case DeleteConstants.DELETE_IMAGE:
      success = (imgId) => dispatch(removeImage(imgId));
      error = () => window.alert("Something Went Wrong While Deleting Image");
      DELETE_API.deleteImage(action.toDelete, success, error);
      return next(action);

    case DeleteConstants.DELETE_COMMENT:
      success = (cmt) => dispatch(removeComment(cmt));
      error = () => window.alert("Something went wrong while deleting comment");
      DELETE_API.deleteComment(action.toDelete, success, error);
      return next(action);

    case LikeConstants.PROCESS_LIKE:
      success = (like) => dispatch(receiveLike(action.likeAbility, like));
      error = () => window.alert("Something went wrong while liking");
      if (action.likeAbility === LikeConstants.LIKE) {
        LIKE_API.like(action.imageId, success, error);
        return next(action);
      } else {
        LIKE_API.unlike(action.imageId, success, error);
        return next(action);
      }
    default:
      next(action);
  }
};

export default ImageMiddleware;
