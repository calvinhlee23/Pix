import React from 'react';
import UserBio from './user_bio';
import Loader from '../../util/loader';
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      var path = nextProps.location.pathname.split("/");
      var userName = path[2];
      this.props.requestTargetUser(userName);
    }
  }

  render() {
    return (
      // browswer: /?user=abc
      // query: {"user":"abc"} when rendered
      <div>
        <section className = "user-profile">
          <MenuBar {...this.props}/>
          <UserBio {...this.props}/>
          <Stream {...this.props}/>
        </section>
        </div>
    );
  }
}

export default UserProfile;
