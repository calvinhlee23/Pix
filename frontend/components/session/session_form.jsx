import React from 'react';
import {hashHistory, Link} from 'react-router';


class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: "",
      user_name: "",
      password: "",
      password_conf: ""
    };
  }

  handleChange(type) {
    return e => {this.setState({[type]: e.currentTarget.value});};
  }

  componentDidUpdate() {
    if (this.props.formType === "logout" ||
        this.props.formType === "guestLogin") {
      this.props.processForm();
      hashHistory.push("/");
    } else {
      this.redirectIfLoggedIn();
    }
  }

  componentWillMount() {
    if (this.props.formType === "logout" ||
        this.props.formType === "guestLogin") {
      this.props.processForm();
      hashHistory.push("/");
      window.location.reload();
    } else {
      this.redirectIfLoggedIn();
    }
  }

  redirectIfLoggedIn() {
    if (this.props.isLoggedIn) {
      hashHistory.push("/publicImages");
    }
  }

  submit(event) {
    event.preventDefault();
    if (this.props.formType === "signup") {
      if (this.emailCheck() && this.userNameCheck() && this.passwordCheck()) {
        this.props.processForm(this.state);
      }
    } else {
      this.props.processForm(this.state);
    }
  }

  userNameCheck() {
    if(this.state.user_name.length >= 3) {
      return true;
    } else {
      alert("user_name must be at least 3 characters long");
      return false;
    }
  }
  emailCheck() {
    if ((/(@)\w+/).test(this.state.email) && (/([.])/).test(this.state.email)) {
      return true;
    } else {
      alert("please provide valid email");
      return false;
    }
  }
  passwordCheck() {
    if (this.state.password.length < 7) {
      this.clearPassword();
      alert("Password must be at least 7 characters long");
      return false;
    }
    else if (this.state.password !== this.state.password_conf) {
      this.clearPassword();
      alert("Password & Password Confirmation do not match");
      return false;
    } else {
      return true;
    }
  }

  clearPassword () {
    this.setState({password: ""});
    this.setState({password_conf: ""});
  }

  guestLogin() {
    hashHistory.push("/guestLogin");
  }

  render () {
    if (this.props.formType === "login") {
      return (
        <div className = "session-form-wrapper">
        <form className = "session-form">
        <h2> Log In </h2>
          <input type = "text"
            onChange= {this.handleChange("email")}
            value = {this.state.email}
            placeholder = "email" id = "login-email"/><br/>
          <input type = "password"
            onChange = {this.handleChange("password")}
            value = {this.state.password}
            placeholder = "password"/><br/>
          <div className = "session-submit"
          value = "Submit"
          onClick = {this.submit.bind(this)}>Submit</div>
        </form>
        <div className = "session-to-other-session">
        <h2> Other </h2>
            <Link to = {{pathname: `/signup`}}>SIGN UP!</Link>
              <span onClick = {this.guestLogin.bind(this)}
                    className = "guest-login">LOGIN AS GUEST</span>
        </div>
        </div>
      );
    } else {
      return (
        <div className = "session-form-wrapper">
        <form className= "session-form">
        <h2> Sign Up </h2>
        <input type = "text"
          onChange= {this.handleChange("email")}
          value = {this.state.email}
          placeholder = "email"/><br/>
        <input type = "text"
          onChange = {this.handleChange("user_name")}
          value = {this.state.user_name}
          placeholder = "user name"/><br/>

        <input type = "password"
          onChange = {this.handleChange("password")}
          value = {this.state.password}
          placeholder = "password"/><br/>

        <input type = "password"
          onChange = {this.handleChange("password_conf")}
          value = {this.state.password_conf}
          placeholder = "password confirmation"/><br/>

          <div className = "session-submit"
          value = "Submit"
          onClick = {this.submit.bind(this)}>Submit</div>
        </form>
        <div className = "session-to-other-session">
        <h2> Other </h2>
            <Link to = {{pathname: `/login`}}>LOG IN</Link>
              <span onClick = {this.guestLogin.bind(this)}
                    className = "guest-login">LOGIN AS GUEST</span>
        </div>
        </div>
      );
    }
  }
}

export default SessionForm;
