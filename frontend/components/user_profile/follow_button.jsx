import React from 'react';
import {FollowConstants} from '../../actions/follow_actions';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
  }

  generateFollowButton() {
    var myFollowingUsers = this.props.currentUser.following;
    var targetUserName = this.props.targetUser.user_name;
    if (targetUserName === this.props.currentUser.user_name) {
      return;
    }
    if (this.props.targetUser.public) {
      if (myFollowingUsers.indexOf(targetUserName) >= 0) {
        // unfollow button
        return (
          <button className = "follow-button"
            onClick = {this.followRequest(FollowConstants.UNFOLLOW,
            targetUserName)}>Unfollow</button>
        );
      } else {
        // follow button
        return (
          <button className = "follow-button"
            onClick = {this.followRequest(FollowConstants.FOLLOW,
            targetUserName)}>Follow</button>
        );
      }
    }
  }

  followRequest(type, userName) {
    return () => {
      event.preventDefault();
      this.props.requestFollow(type, userName);
    };
  }


  render() {
    return(
      <div>
        {this.generateFollowButton()}
      </div>
    );
  }
}

export default FollowButton;
