import React from 'react';
import Follow from './follow';
// props look as below:
// targetUser: {
// id:, public, email, user_name, following_users[], followers[]
// }

class UserBio extends React.Component {
  render() {
    var userName = this.props.targetUser.user_name;
    return (
      <div className = "user-bio">
        <h2>{`About ${userName}:`}</h2>
        <Follow {...this.props}/>
      </div>
    );
  }
}

export default UserBio;
