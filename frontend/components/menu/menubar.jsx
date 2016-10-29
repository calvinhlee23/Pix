import React from 'react';
import UploadButton from './upload_button';
import UserSearch from './search/user_search';
import {hashHistory } from 'react-router';
import Gagets from '../gagets/gagets';
class MenuBar extends React.Component {
  constructor(props) {
    super(props);
  }

  ownRequestImages(imageType) {
    return () => {
      hashHistory.push(`/${imageType}`);
      this.props.requestImages(imageType);
    };
  }

  toLogOut() {
    hashHistory.push('/logout');
  }

  toHome() {
    event.preventDefault();
    hashHistory.push('/');
  }

  render() {
    return(
      <div>
        <div className = "menu-bar">
          <div id = "user">
          <div className = "glyphicon glyphicon-home"
                onClick = {this.toHome.bind(this)}
                id = "home"/>
          <h2>Hello {this.props.currentUser.user_name}</h2>
          <button onClick = {this.toLogOut.bind(this)}>Logout</button></div>
        </div>
        <aside className = "stream-menu-wrapper">
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
            <UserSearch className = "user-search"/>
          </ul>
        </aside>
        <Gagets {...this.props}/>
      </div>
    );
  }
}

export default MenuBar;
