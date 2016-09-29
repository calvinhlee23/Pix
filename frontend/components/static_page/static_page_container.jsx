import StaticPage from './static_page';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';

import {postImage} from '../../actions/image_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  postImage: (cloud_url) => dispatch(postImage(cloud_url))
});

export default connect(mapStateToProps, mapDispatchToProps)(StaticPage);
