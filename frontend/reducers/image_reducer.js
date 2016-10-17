import {ImageConstants} from '../actions/image_actions';
import merge from 'lodash/merge';
import {CommentConstants} from '../actions/comment_actions';
import {DeleteConstants} from '../actions/delete_actions';

const ImageReducer = (state = {}, action) =>  {
  var success, error;
  var newState, targetImage;
  switch (action.type) {
    case ImageConstants.RECEIVE_AN_IMAGE:
    // only renders the uploaded image
      newState = action.image;
      return newState;
    case ImageConstants.RECEIVE_IMAGES:
    // the old is state is discarded
      newState = action.images;
      return newState;
    case CommentConstants.RECEIVE_A_COMMENT:
      newState = merge({}, state);
      targetImage = newState[action.comment.image_id];
      targetImage.comments.push(action.comment);
      return newState;
    case DeleteConstants.REMOVE_IMAGE:
      newState = merge({}, state);
      delete newState[action.imgId];
      return newState;
    case DeleteConstants.REMOVE_COMMENT:
      newState = merge({}, state);
      targetImage = newState[action.comment.image_id];
      var comments = targetImage.comments;
      var index;
      comments.forEach ((cmt, ind) => {
        if (cmt.id === action.comment.id) {
          index = ind;
          return;
        }
      });
      comments = comments.splice(index, index);
      return newState;
    default:
      return state;
  }
};

export default ImageReducer;
