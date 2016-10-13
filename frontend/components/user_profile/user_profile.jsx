import React from 'react';
import {FollowConstants} from '../../actions/follow_actions';

class UserProfile extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var userName = this.props.location.query.user;
    this.props.requestTargetUser(userName);
    this.props.requestImages("userImages", userName);
  }

  componenetWillReceiveProps() {
    var userName = this.props.location.query.user;
    this.props.requestTargetUser(userName);
    this.props.requestImages("userImages", userName);
  }

  generateProfileName() {
    var userName = this.props.targetUser.user_name;
      if (userName) {
        return (
          <div>
          <h2>{`${userName}'s Stream`}</h2>
          {JSON.stringify(this.props.targetUser)}
          </div>
        );
      } else {
        return (
          <h2>User Name: ({this.props.location.query.user}), Does Not Exist</h2>
        );
      }
  }

  followRequest(type, userName) {
    return () => {
      event.preventDefault();
      this.props.requestFollow(type, userName)
    };
  }

  generateFollowButton() {
    var myFollowingUsers = this.props.currentUser.following;
    var targetUserName = this.props.targetUser.user_name;
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

  render() {
    return (
      // browswer: /?user=abc
      // query: {"user":"abc"} when rendered
      <div>
        <section className = "user-profile">
          {this.generateProfileName()}
          {this.generateFollowButton()}
        </section>
      {this.props.streamGenerator()}
      </div>
    );
  }
}

export default UserProfile;
