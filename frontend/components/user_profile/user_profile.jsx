import React from 'react';
import FollowButton from './follow_button';
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

  componenetWillReceiveProps() {
    var userName = this.props.location.query.user;
    this.props.requestTargetUser(userName);
    this.props.requestImages("userImages", userName);
  }

  generateProfile() {
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

  render() {
    return (
      // browswer: /?user=abc
      // query: {"user":"abc"} when rendered
      <div>
        <section className = "user-profile">
          {this.generateProfile()}
          <FollowButton {...this.props}/>
        </section>
      {this.props.streamGenerator()}
      </div>
    );
  }
}

export default UserProfile;
