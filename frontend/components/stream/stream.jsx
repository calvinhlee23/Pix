import React from 'react';
import UploadButton from './upload_button';
class Stream extends React.Component {
  constructor (props) {
    super(props);
    window.props = props;
  }

  toStream () {
    event.preventDefault();
    console.log('hello friend!');
  }

  componentWillReceiveProps() {
    this.forceUpdate();
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

      {/* in each li, <FRAME/> will be inserted with img componenet  */}
          IMGES
          <ul className = "frames">
            <li>{`${this.props.images}`}</li>
          </ul>

      </div>
    );
  }
}

export default Stream;
