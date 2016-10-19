import React from 'react';
import UserBio from './user_bio';
import Stream from '../stream/stream';
import MenuBar from '../menu/menubar';

class UserProfile extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      var path = this.props.location.pathname.split("/");
      if (path[1] === "user") {
        var userName = path[2];
        this.props.requestTargetUser(userName);
        this.props.requestImages("userImages", userName);
    }
  }

  generateProfile() {
    if (this.props.targetUser.user_name) {
      return(
        <div>
          <UserBio {...this.props}/>
        </div>
      );
    }
  }

  render() {
    return (
      // browswer: /?user=abc
      // query: {"user":"abc"} when rendered
      <div>
        <section className = "user-profile">
          <MenuBar {...this.props}/>
          {this.generateProfile()}
          <Stream {...this.props}/>
        </section>
        </div>
    );
  }
}

export default UserProfile;
