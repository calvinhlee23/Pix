import {connect} from "react-redux";
import SessionForm from './session_form';
import {login, logout, signup} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  isLoggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,

});

const mapDispatchToProps = (dispatch) => ({
  login_user: (userData) => dispatch(login(userData))
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
