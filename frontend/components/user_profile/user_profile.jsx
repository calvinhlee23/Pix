import React from 'react';
import UserBio from './user_bio';
import Loader from '../../util/loader';
import Stream from '../stream/stream';
import MenuBar from '../menu/menubar';

class UserProfile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  render() {
    if (this.state.loading) {
      return (
        <section className = "user-profile">
        <Loader/>
        </section>
      );
    } else {
      return (
        // browswer: /?user=abc
        // query: {"user":"abc"} when rendered
        <div>
          <section className = "user-profile">
            <UserBio {...this.props}/>
          </section>
          </div>
      );
    }
  }
}

export default UserProfile;
