import React from 'react';
import { Link, hashHistory } from 'react-router';
import Stream from '../stream/stream';
import MenuBar from './menu/menubar';

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

  // create an util_api, actions, middleware accordingly
  postImage(cloud_url) {
    this.props.postImage(cloud_url);
  }

  render() {
    if (this.props.currentUser) {
      // browswer: /?user=abc
      // query: {"user":"abc"}
      if (this.props.location.query.user) {
        return(
          <div>
          {JSON.stringify(this.props.location.query)}
          </div>
        );
      }
      return (
        <span id = "logged-in-greetings">
          <h1>Hello, {this.props.currentUser.user_name}</h1>
          <button onClick = {this.toLogOut.bind(this)}>Logout</button>
          <MenuBar {...this.props}/>
          <Stream {...this.props}/>
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
