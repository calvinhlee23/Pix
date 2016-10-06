import StaticPage from './static_page';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';

import {postImage, requestImages} from '../../actions/image_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  images: state.images
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  postImage: (cloud_url) => dispatch(postImage(cloud_url)),
  requestImages: (imageType) => dispatch(requestImages(imageType))
});

export default connect(mapStateToProps, mapDispatchToProps)(StaticPage);
