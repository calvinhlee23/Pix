import React from 'react';
import {hashHistory} from 'react-router';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: "",
      user_name: "",
      password: ""
    };
  }

  handleChange(type) {
    return e => {this.setState({[type]: e.currentTarget.value});};
  }

  componentDidUpdate() {
    console.log("it's updated!");
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.isLoggedIn) {
      hashHistory.push("/");
    }
  }

  submit(event) {
    event.preventDefault();
    this.props.login_user({
          email: this.state.email,
          password: this.state.password
    });
  }

  render () {
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
  }
}

export default SessionForm;
