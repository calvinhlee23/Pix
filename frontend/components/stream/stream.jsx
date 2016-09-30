import React from 'react';
import UploadButton from './upload_button';
class Stream extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      img_links: []
    };
  }

  toStream () {
    event.preventDefault();
    console.log('hello friend!');
  }
  render() {
    return (
      <div>
      <ul id = "menu-bar">
        this is menu-bar. Each menu can be clicked. it will be styled later
        <li id = "following-stream-menu"
        onClick = {this.toStream}>Following Stream</li>
        <li id = "public-stream-menu"
          onClick = {this.toStream}>Public Stream</li>
        <li id = "my-stream-menu"
          onClick = {this.toStream}>My Stream</li>
        <li id = "upload-button"><UploadButton id = "upload-button"
            postImage = {this.props.postImage.bind(this)}/></li>
      </ul>


        <ul id = "imgs">
          IMGES
          {this.state.img_links.map((img, index) => {
            return <li img_links = {img} key = {index}/>;
          })}
        </ul>

      </div>
    );
  }
}

export default Stream;
