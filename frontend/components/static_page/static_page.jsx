import React from 'react';
import { Link, hashHistory } from 'react-router';
import MenuBar from './menu_bar';

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


  // create an util_api, actions, middleware accordingly
  postImage(cloud_url) {
    this.props.postImage(cloud_url);
  }

  fetchUser() {
    return this.props.currentUser;
  }

  toStream(stream) {
    event.preventDefault();
    return () => hashHistory.push(stream);
  }
  render() {
    if (this.props.currentUser) {
      return (
        <span id = "logged-in-greetings">
          <h1>Hello, {this.props.currentUser.user_name}</h1>
          <button onClick = {this.toLogOut.bind(this)}>Logout</button>
          <MenuBar postImage = {this.postImage.bind(this)}/>
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
