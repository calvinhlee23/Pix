import React from 'react';

class UserProfile extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
  render() {
    return (
      // browswer: /?user=abc
      // query: {"user":"abc"} when rendered
      <section className = "user-profile">
        {this.generateProfileName()}
        {this.props.streamGenerator()}
      </section>
    );
  }
}

export default UserProfile;
