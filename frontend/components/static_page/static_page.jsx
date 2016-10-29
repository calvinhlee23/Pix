import React from 'react';
import { Link, hashHistory } from 'react-router';
import Stream from '../stream/stream';
import MenuBar from '../menu/menubar';

class StaticPage extends React.Component {
  constructor(props) {
    super(props);
  }

  toLogOut() {
    this.props.logout();
    window.location.reload();
  }

  toLogIn () {
    hashHistory.push("/login");
  }

  toSignUp () {
    hashHistory.push("/signup");
  }
  // create an util_api, actions, middleware accordingly
  postImage(cloud_url) {
    this.props.postImage(cloud_url);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <span id = "logged-in-greetings">
        <MenuBar {...this.props}/>
        <Stream {...this.props}/>
        </span>
      );
    } else {
      return(
        <span id = "not-logged-in-greetings">
          <h1>Welcome to Pix!</h1>
          <button onClick = {this.toLogIn.bind(this)}>Log In</button>
          <button onClick = {this.toSignUp.bind(this)}>Sign Up</button>
        </span>
      )
    }
  }
}

export default StaticPage;
