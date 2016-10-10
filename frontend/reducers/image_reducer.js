import {ImageConstants} from '../actions/image_actions';
import merge from 'lodash/merge';
import {CommentConstants} from '../actions/comment_actions';


const ImageReducer = (state = {} , action ) =>  {
  var success, error;
  var newState;
  switch (action.type) {
    case ImageConstants.RECEIVE_AN_IMAGE:
    // only renders the uploaded image
      return action.image;
    case ImageConstants.RECEIVE_IMAGES:
    // the old is state is discarded
      return action.images;
    case CommentConstants.RECEIVE_A_COMMENT:
      newState = merge({}, state);
      var targetImage = newState[action.comment.image_id];
      targetImage.comments.push(action.comment);
      return newState;
    default:
      return state;
  }
};

export default ImageReducer;
