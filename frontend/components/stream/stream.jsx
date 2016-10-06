import React from 'react';
import UploadButton from './upload_button';
import Frame from './frame';

class Stream extends React.Component {
  constructor (props) {
    super(props);
    window.props = props;
  }

  ownRequestImages(imageType) {
    event.preventDefault();
    return () => {
      this.props.requestImages(imageType);
    };
  }

  render() {
    return (
      <div>
      <ul className = "menu-bar">
        this is menu-bar. Each menu can be clicked. it will be styled later
        <li id = "following-stream-menu"
        onClick = {this.ownRequestImages("followingImages")}>Following Stream</li>
        <li id = "public-stream-menu"
          onClick = {this.ownRequestImages("publicImages")}>Public Stream</li>
        <li id = "my-stream-menu"
          onClick = {this.ownRequestImages("myImages")}>My Stream</li>
        <li id = "upload-button"><UploadButton id = "upload-button"
            postImage = {this.props.postImage.bind(this)}/></li>
      </ul>

      {/* in each li, <FRAME/> will be inserted with img componenet  */}
          IMGES
          <ul className = "Stream">
            {Object.keys(this.props.images).forEach((imgId) => {
              return <Frame image = {this.props.images.imgId} key = {imgId}/>;
            })}
          </ul>

      </div>
    );
  }
}

export default Stream;
