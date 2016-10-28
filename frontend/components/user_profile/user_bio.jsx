import React from 'react';
import Follow from './follow';
import Loader from '../../util/loader';
import Stream from '../stream/stream';

// props look as below:
// targetUser: {
// id:, public, email, user_name, following_users[], followers[]
// }

class UserBio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null
    };
  }
  componentWillMount () {
    this.setState({userName: this.props.targetUser.user_name});
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.targetUser !== this.props.targetUser) {
      this.setState({userName: nextProps.targetUser.user_name});
    }
  }

  render() {
    if (this.state.userName) {
      return (
        <div className = "user-bio">
        <h2>{`About ${this.state.userName}:`}</h2>
        <Follow {...this.props}/>
        </div>
      );
    } else {
      return(
        <Loader/>
      );
    }
  }
}

export default UserBio;
