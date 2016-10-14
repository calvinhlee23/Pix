import React from 'react';
import FollowButton from './follow_button';
import UserBio from './user_bio';
import Loader from '../../util/loader';
import Stream from '../stream/stream';
import MenuBar from '../menu/menubar';

class UserProfile extends React.Component{
  constructor(props) {
    super(props);
    window.props = this.props;
  }

  componentDidMount() {
    console.log('hihihi');
    var path = this.props.location.pathname.split("/");
    if (path[1] === "user") {
      var userName = path[2];
      this.props.requestTargetUser(userName);
    }
  }

  generateProfile() {
    if (this.props.targetUser.user_name) {
      return(
        <div>
          <UserBio {...this.props}/>
          <FollowButton {...this.props}/>
        </div>
      );
    } else {
      return(<Loader/>);
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
