import React from 'react';
class UploadButton extends React.Component {
  upload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(window.cloudinary_options,
      (error, images) => {
        if (error === null) {
          // store the cloud url and post it to my db with ajax
          this.props.postImage(images[0].url);
        }
      });
  }


  render() {
    return (
      <button onClick = {this.upload}>Add to Stream</button>
    );
  }
}


export default UploadButton;
