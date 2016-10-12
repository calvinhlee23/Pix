import StaticPage from './static_page';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';

import {postImage, requestImages} from '../../actions/image_actions';
import {requestComments, postComment} from '../../actions/comment_actions';
import {requestTargetUser} from '../../actions/user_actions';

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
  requestTargetUser: (userName) => dispatch(requestTargetUser(userName))
});

export default connect(mapStateToProps, mapDispatchToProps)(StaticPage);
