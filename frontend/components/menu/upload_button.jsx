import React from 'react';
import {hashHistory} from 'react-router';

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
  }

  upload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(
      window.cloudinary_options,
      ((error, images) => {
        if (error === null) {
          // store the cloud url and post it to my db with ajax
          this.props.postImage(images[0].url);
          hashHistory.push('/myImages');
        }
      }).bind(this));
  }


  render() {
    return (
      <div className  = "glyphicon glyphicon-plus"
          onClick = {this.upload.bind(this)}></div>
    );
  }
}


export default UploadButton;
