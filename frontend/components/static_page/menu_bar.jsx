import React from 'react';
import {hashHistory} from 'react-router';
import UploadButton from './upload_button';

class MenuBar extends React.Component {

  toStream(stream) {
    event.preventDefault();
    return () => hashHistory.push(stream);
  }

  postImage(cloud_url) {
    this.props.postImage(cloud_url);
  }
  
  render( ) {
    return(
      <ul id = "menu-bar">
        this is menu-bar. Each menu can be clicked. it will be styled later
        <li id = "following-stream-menu"
        onClick = {this.toStream("/followingStream")}>Following Stream</li>
        <li id = "public-stream-menu"
          onClick = {this.toStream("/publicStream")}>Public Stream</li>
        <li id = "my-stream-menu"
          onClick = {this.toStream("/myStream")}>My Stream</li>
        <li id = "upload-button"><UploadButton id = "upload-button"
            postImage = {this.postImage.bind(this)}/></li>
      </ul>
    );
  }
}

export default MenuBar;
