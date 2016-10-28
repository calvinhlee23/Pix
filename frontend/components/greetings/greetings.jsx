import React from 'react';
import Clock from './clock';
import Weather from './weather';
import MenuBar from '../menu/menubar';
import {hashHistory} from 'react-router';

class GreetingPage extends React.Component {
  toLogIn () {
    hashHistory.push("/login");
  }

  toSignUp () {
    hashHistory.push("/signup");
  }
  render () {
    if (this.props.currentUser) {
      return (
        // <div className = "stream" >
        <div className = "greeting">
          <MenuBar {...this.props}/>
          <div className = "greetings-gagets-wrapper">
            <Clock className = "gaget-clock"/>
            <Weather className = "gaget"/>
          </div>
        </div>
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

export default GreetingPage;
