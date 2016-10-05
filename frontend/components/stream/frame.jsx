import React from  'react';
import CommentSection from './comment/comment_section';

class Frame extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return(
      <li key = {this.props.image.id} className = "frame">
        <h1 className = "frame-userName">{this.props.image.user.user_name}</h1>
        <img src = {this.props.image.cloud_url} className = "frame-Image"/>
        <div>{this.props.image.created_at}</div>
        <section className = "frame-commentSection">
          <CommentSection comments = {this.props.image.comments}/>
        </section>
      </li>
    );
  }
}


export default Frame;
