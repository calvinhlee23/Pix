import React from 'react';
import { Link, hashHistory } from 'react-router';

class StaticPage extends React.Component {
  constructor(props) {
    super(props);
  }

  toLogIn () {
    event.preventDefault();
    hashHistory.push("/login");
  }

  toSignUp () {
    event.preventDefault();
    hashHistory.push("/signup");
  }

  toLogOut() {
    event.preventDefault();
    this.props.logout();
    window.location.reload();
  }

  componentDidMount() {
    this.forceUpdate();
  }

  componentWillReceiveProps() {
    window.location.refresh();
  }

  fetchUser() {
    return this.props.currentUser;
  }

  render() {
    console.log(this.props.currentUser);
    if (this.props.currentUser) {
      return (
        <span id = "logged-in-greetings">
          <h1>Hello, {this.props.currentUser.user_name}</h1>
          <button onClick = {this.toLogOut.bind(this)}>Logout</button>
        </span>
      );
    } else {
      return  (
        <span id = "not-logged-in-greetings">
          <h1>Welcome to Pix!</h1>
          <button onClick = {this.toLogIn.bind(this)}>Log In</button>
          <button onClick = {this.toSignUp.bind(this)}>Sign Up</button>
        </span>
      );
    }
  }
}

export default StaticPage;