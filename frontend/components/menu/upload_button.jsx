import React from 'react';
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
        }
      }).bind(this));
  }


  render() {
    return (
      <div onClick = {this.upload.bind(this)}>Add to Stream</div>
    );
  }
}


export default UploadButton;
