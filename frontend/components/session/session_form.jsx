import React from 'react';
import {hashHistory} from 'react-router';


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
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.isLoggedIn) {
      hashHistory.push("/");
    }
  }

  submit(event) {
    event.preventDefault();
    if (this.props.formType === "signup") {
      if (this.passwordCheck()) {
        this.props.processForm(this.state);
      }
    } else {
      this.props.processForm(this.state);
    }
  }

  passwordCheck() {
    if (this.state.password.length < 7) {
      this.resetPassword();
      alert("Password must be at least 7 characters long");
    }
    else if (this.state.password !== this.state.password_conf) {
      this.resetPassword();
      alert("Password & Password Confirmation do not match");
      return false;
    } else {
      return true;
    }
  }

  resetPassword () {
    this.setState({password: ""});
    this.setState({password_conf: ""});
  }

  render () {
    if (this.props.formType === "login") {
      return (
        <form id = "session-form">
          Email: <input type = "text"
                  onChange= {this.handleChange("email")}
                  value = {this.state.email}/><br/>
          Password: <input type = "password"
                    onChange = {this.handleChange("password")}
                    value = {this.state.password}/><br/>
          <input type = "submit"
          value = "Submit"
          onClick = {this.submit.bind(this)}/>
        </form>
      );
    } else {
      return (
        <form id = "session-form">
        Email: <input type = "text"
          onChange= {this.handleChange("email")}
          value = {this.state.email}/><br/>
        Username: <input type = "text"
          onChange = {this.handleChange("user_name")}
          value = {this.state.user_name}/><br/>
        Password: <input type = "password"
          onChange = {this.handleChange("password")}
          value = {this.state.password}/><br/>
        Password Confirmation:
          <input type = "password"
          onChange = {this.handleChange("password_conf")}
          value = {this.state.password_conf}/><br/>
        <input type = "submit"
        value = "Submit"
        onClick = {this.submit.bind(this)}/>
        </form>
      );
    }
  }
}

export default SessionForm;
