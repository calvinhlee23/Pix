import React from 'react';
import Follow from './follow';
import Loader from '../../util/loader';

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

  componentWillMount() {
    this.setState({userName: this.props.targetUser.user_name});
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
