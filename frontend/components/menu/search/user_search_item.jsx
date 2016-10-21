import React from 'react';

class UserSearchItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(<li key = {this.props.user.id}>{this.props.user.user_name}</li>);
  }
}

export default UserSearchItem;
