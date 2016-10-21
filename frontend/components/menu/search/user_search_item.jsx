import React from 'react';
import {Link} from 'react-router';

class UserSearchItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.user === "no user found") {
      return (<div/>);
    } else {
      return(<li key = {this.props.user.id}  className = "user-search-item">
        <Link to = {{pathname: `/user/${this.props.user.user_name}`}}
          className = "user-search-item">
        {this.props.user.user_name}</Link></li>);
    }
  }
}

export default UserSearchItem;
