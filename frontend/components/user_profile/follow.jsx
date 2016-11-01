import React from 'react';
import {FollowConstants} from '../../actions/follow_actions';

class Follow extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      followers: 0,
      following: 0,
      button: null
    };
  }

  componentWillMount() {
    this.setState({followers: this.props.targetUser.followers.length});
    this.setState({following: this.props.targetUser.following_users.length});
    this.checkButton();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.targetUser !== this.props.targetUser) {
      this.setState({button: null});
      setTimeout(() => {
        this.checkButton(nextProps);
      }, 500);
    }
  }
  checkButton(nextProps) {
    var myFollowingUsers = this.props.currentUser.following;
    var targetUserName;
    if (nextProps) {
        targetUserName = nextProps.targetUser.user_name;
        if (targetUserName !== this.props.currentUser.user_name) {
          if (myFollowingUsers.indexOf(targetUserName) >= 0) {
            this.setState({button: FollowConstants.UNFOLLOW});
            return;
          }
          if (this.props.targetUser.public) {
            this.setState({button: FollowConstants.FOLLOW});
          }
        }
    } else {
      targetUserName = this.props.targetUser.user_name;
      if (targetUserName !== this.props.currentUser.user_name) {
        if (myFollowingUsers.indexOf(targetUserName) >= 0) {
          this.setState({button: FollowConstants.UNFOLLOW});
          return;
        }
        if (this.props.targetUser.public) {
          this.setState({button: FollowConstants.FOLLOW});
        }
      }
    }
  }

  followRequest(type, userName) {
    return () => {
      event.preventDefault();
      this.props.requestFollow(type, userName);
      if (type === FollowConstants.UNFOLLOW) {
        this.setState({followers: this.state.followers -= 1});
        this.setState({button: FollowConstants.FOLLOW});
      } else {
        this.setState({followers: this.state.followers += 1});
        this.setState({button: FollowConstants.UNFOLLOW});
      }
    };
  }

  render() {
    if (this.state.button) {
      var targetUserName = this.props.targetUser.user_name;
      return (
        <div className = "follow">
        <label className = "followers">
        Followers: {this.state.followers}&nbsp;</label>
        <label className = "following">
        Following: {this.state.following}&nbsp;</label>
        <div className = "follow-button"
          onClick = {this.followRequest(this.state.button, targetUserName)}>
          {this.state.button}</div>
        </div>
      );
    } else {
      return(
        <div className = "follow">
        <label className = "followers">
        Followers: {this.state.followers}&nbsp;</label>
        <label className = "following">
        Following: {this.state.following}&nbsp;</label>
        </div>
      );
    }
  }
}

export default Follow;
