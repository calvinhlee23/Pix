import React from 'react';
import FollowButton from './follow_button';
// props look as below:
// targetUser: {
// id:, public, email, user_name, following_users[], followers[]
// }

class UserBio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: 0,
      following: 0
    };
  }

  componentDidMount() {
    this.setState({followers: this.props.targetUser.followers.length});
    this.setState({following: this.props.targetUser.following_users.length});
  }

  componentDidUpdate() {
    this.setState({followers: this.props.targetUser.followers.length});
    this.setState({following: this.props.targetUser.following_users.length});
  }

  render() {
    var userName = this.props.targetUser.user_name;
    return (
      <div className = "user-bio">
        <h2>{`About ${userName}:`}</h2>
        <label className = "followers">
          Followers: {this.state.followers}</label>
        <label className = "following">
          Following: {this.state.following}</label>
      </div>
    );
  }
}

export default UserBio;
