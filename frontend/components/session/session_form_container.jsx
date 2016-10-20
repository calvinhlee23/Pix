import {connect} from "react-redux";
import SessionForm from './session_form';
import {login, logout, signup} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  isLoggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,

});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);

  var processForm;
  if (formType === 'login') {
    processForm = login;
  } else if (formType === 'signup') {
    processForm = signup;
  } else if (formType === 'logout') {
    processForm = logout;
  }

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
