import React from  'react';
import CommentSection from './comment/comment_section';
import {Link} from "react-router";
import DeleteButton from '../delete/delete_button';
import Like from './like/like';

class Frame extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      commentBody: "",
      likeNum: 0,
      likeAbility: "Like"
    };
  }



  submitComment (event) {
    if (event.key === "Enter") {
      // postCommment: (imageId, comment)
      this.props.postComment(this.props.image.id, this.state.commentBody);
      this.setState({commentBody: ""});
    }
  }


  write(event) {
    var body = event.currentTarget.value;
    this.setState({commentBody: body});
  }

  timeSince(date) {
      var seconds = Math.floor((new Date() - date) / 1000);

      var interval = Math.floor(seconds / 31536000);

      if (interval > 1) {
          return interval + " years";
      }
      interval = Math.floor(seconds / 2592000);
      if (interval > 1) {
          return interval + " months";
      }
      interval = Math.floor(seconds / 86400);
      if (interval > 1) {
          return interval + " days";
      }
      interval = Math.floor(seconds / 3600);
      if (interval > 1) {
          return interval + " hours";
      }
      interval = Math.floor(seconds / 60);
      if (interval > 1) {
          return interval + " minutes";
      }
      return Math.floor(seconds) + " seconds";
  }

  render() {
    var userName = this.props.image.user.user_name;
    return(
      <li key = {this.props.image.id} className = "frame">
      <h2 className = "frame-userName">
      <Link to = {{pathname: `/user/${userName}`}}>{userName}</Link>
      </h2>
        <img src = {this.props.image.cloud_url} className = "frame-Image"/>
        <DeleteButton image = {this.props.image}
                      deleteThis = {this.props.deleteThis}
                      currentUser = {this.props.currentUser}/>

        <div className = "time-ago">
          {this.timeSince(Date.parse(this.props.image.created_at))} ago</div>


        <Like {...this.props}/>
        
        <section className = "frame-commentSection">
          <CommentSection comments = {this.props.image.comments}
                          deleteThis = {this.props.deleteThis}
                          currentUser = {this.props.currentUser}/>
          <input type = "text" className = "commentSubmit"
            onChange = {this.write.bind(this)}
            onKeyDown = {this.submitComment.bind(this)}
            value = {this.state.commentBody}/>
        </section>
      </li>
    );
  }
}


export default Frame;
