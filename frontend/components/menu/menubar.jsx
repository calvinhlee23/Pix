import React from 'react';
import UploadButton from './upload_button';
import UserSearch from './search/user_search';
import {hashHistory } from 'react-router';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
  }

  ownRequestImages(imageType) {
    event.preventDefault();
    return () => {
      hashHistory.push(`/${imageType}`);
      this.props.requestImages(imageType);
    };
  }

  toLogOut() {
    hashHistory.push('/logout');
  }

  render() {
    return(
      <div className = "menu-bar">
        <div id = "user">
        <h2>Hello {this.props.currentUser.user_name}</h2>
        <button onClick = {this.toLogOut.bind(this)}>Logout</button></div>
        <ul className = "stream-menu">
          <li id = "following-stream-menu"
          onClick = {this.ownRequestImages("followingImages")}>
          Following Stream</li>
          <li id = "public-stream-menu"
          onClick = {this.ownRequestImages("publicImages")}>Public Stream</li>
          <li id = "my-stream-menu"
          onClick = {this.ownRequestImages("myImages")}>My Stream</li>
          <li id = "upload-button"><UploadButton id = "upload-button"
          postImage = {this.props.postImage.bind(this)}/></li>
          <li><UserSearch className = "user-search"/></li>
        </ul>
      </div>
    );
  }
}

export default MenuBar;
