import React from 'react';
import FollowButton from './follow_button';
// props look as below:
// targetUser: {
// id:, public, email, user_name, following_users[], followers[]
// }

class UserBio extends React.Component {
  constructor(props) {
    super(props);
    this.targetUser = this.props.targetUser;
  }

  render() {
    var userName = this.props.targetUser.user_name;
    return (
      <div className = "user-bio">
        <h2>{`About ${userName}:`}</h2>
        <label className = "followers">
          Followers: {this.targetUser.followers.length}</label>
        <label className = "following">
          Following: {this.targetUser.following_users.length}</label>
      </div>
    );
  }
}

export default UserBio;
