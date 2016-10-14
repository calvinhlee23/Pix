import React from 'react';
import FollowButton from './follow_button';
import UserBio from './user_bio';
import Loader from '../../util/loader';

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
        return(<Loader/>);
      }
  }

  render() {
    return (
      // browswer: /?user=abc
      // query: {"user":"abc"} when rendered
        <section className = "user-profile">
          {this.generateProfile()}
        </section>
    );
  }
}

export default UserProfile;
