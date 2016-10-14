import React from 'react';
import FollowButton from './follow_button';
import UserBio from './user_bio';

class UserProfile extends React.Component{
  constructor(props) {
    super(props);
    window.props = this.props;
  }

  componentDidMount() {
    var userName = this.props.location.query.user;
    this.props.requestTargetUser(userName);
    this.props.requestImages("userImages", userName);
  }

  generateProfile() {
    var userName = this.props.targetUser.user_name;
      if (userName) {
        return (
          <UserBio {...this.props}/>
        );
      } else {
        // waits for 1.5 sec to load user
        window.setTimeout(() => {
          return (
            <h2>User Name: ({this.props.location.query.user}),
            Does Not Exist</h2>
          );
        }, 1500);

      }
  }

  render() {
    return (
      // browswer: /?user=abc
      // query: {"user":"abc"} when rendered
      <div>
        <section className = "user-profile">
          {this.generateProfile()}
        </section>
      {this.props.streamGenerator()}
      </div>
    );
  }
}

export default UserProfile;
