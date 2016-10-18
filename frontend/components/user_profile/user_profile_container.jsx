import UserProfile from './user_profile';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';

import {postImage, requestImages} from '../../actions/image_actions';
import {requestComments, postComment} from '../../actions/comment_actions';
import {requestTargetUser} from '../../actions/user_actions';
import {requestFollow} from '../../actions/follow_actions';
import {deleteThis} from '../../actions/delete_actions';
import {processLike} from '../../actions/like_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  images: state.images,
  targetUser: state.targetUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  postImage: (cloud_url) => dispatch(postImage(cloud_url)),
  requestImages: (imageType, userName) => dispatch(requestImages(imageType, userName)),
  postComment: (imageId, comment) => dispatch(postComment(imageId, comment)),
  requestTargetUser: (userName) => dispatch(requestTargetUser(userName)),
  requestFollow: (type, userName) => dispatch(requestFollow(type, userName)),
  deleteThis: (type, toDelete) => dispatch(deleteThis(type, toDelete)),
  processLike: (likeAbility, imageId) => dispatch(processLike(likeAbility, imageId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
