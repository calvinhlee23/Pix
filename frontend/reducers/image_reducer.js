import {ImageConstants} from '../actions/image_actions';
import merge from 'lodash/merge';
import {CommentConstants} from '../actions/comment_actions';
import {DeleteConstants} from '../actions/delete_actions';
import {LikeConstants} from '../actions/like_actions';

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
      targetImage.comments.unshift(action.comment);
      return newState;
    case DeleteConstants.REMOVE_IMAGE:
      newState = merge({}, state);
      delete newState[action.imgId];
      return newState;
    case DeleteConstants.REMOVE_COMMENT:
      newState = merge({}, state);
      targetImage = newState[action.comment.image_id];
      var comments = targetImage.comments;
      var newComments = merge([], comments);
      comments.forEach ((cmt, ind) => {
        if (cmt.id === action.comment.id) {
          if (ind === 0) {
            newComments.shift();
          } else {
            newComments.splice(ind, ind);
          }
          // below ensures that newState is mutated
          newState[action.comment.image_id].comments = newComments;
          return newState;
        }
      });
      return newState;
    case LikeConstants.RECEIVE_LIKE:
      newState = merge({}, state);
      targetImage = newState[action.like.image_id];
      var likes = targetImage.likes;
      if (action.likeAbility === LikeConstants.LIKE) {
        var newLike = {author_id: action.like.author_id};
        likes.push(newLike);
        newState[action.like.image_id].likes = likes;
      } else {
        likes.forEach ((like, ind) => {
          if (like !== undefined &&
              like.author_id === action.like.author_id) {

            likes.splice(ind, ind);
            newState[action.like.image_id].likes = likes;
            return;
          }
        });
      }
      return newState;
    default:
      return state;
  }
};

export default ImageReducer;
