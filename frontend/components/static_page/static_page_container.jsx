import StaticPage from './static_page';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';

import {postImage, requestImages} from '../../actions/image_actions';
import {requestComments, postComment} from '../../actions/comment_actions';
import {deleteThis} from '../../actions/delete_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  images: state.images
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  postImage: (cloud_url) => dispatch(postImage(cloud_url)),
  requestImages: (imageType, userName) => dispatch(requestImages(imageType, userName)),
  postComment: (imageId, comment) => dispatch(postComment(imageId, comment)),
  deleteThis: (type, toDelete) => dispatch(deleteThis(type, toDelete))
});

export default connect(mapStateToProps, mapDispatchToProps)(StaticPage);
