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
        <ul className = "stream-menu">
          this is menu-bar. Each menu can be clicked. it will be styled later
          <li id = "log-out">
          <button onClick = {this.toLogOut.bind(this)}>Logout</button></li>
          <li id = "following-stream-menu"
          onClick = {this.ownRequestImages("followingImages")}>
          Following Stream</li>
          <li id = "public-stream-menu"
          onClick = {this.ownRequestImages("publicImages")}>Public Stream</li>
          <li id = "my-stream-menu"
          onClick = {this.ownRequestImages("myImages")}>My Stream</li>
          <li id = "upload-button"><UploadButton id = "upload-button"
          postImage = {this.props.postImage.bind(this)}/></li>
        </ul>
        <UserSearch className = "user-search"/>
      </div>
    );
  }
}

export default MenuBar;
