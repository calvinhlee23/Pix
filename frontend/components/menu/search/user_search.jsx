import React from 'react';
import UserSearchItem from './user_search_item';
import {UserSearchAPI} from '../../../util/user_search_api_util';

class UserSearch extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      query: "",
      foundUsers: [],
      isSearchDone: true
    };
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({isSearchDone: false});
    this.setState({query: event.currentTarget.value});
    // waits for the query state to update
    window.setTimeout(() => {
      if (this.state.query.length > 0) {
          this.requestUsers(this.state.query);
      }
    } );
  }

  requestUsers(query) {
    var success = ((users) => {
        this.setState({isSearchDone: true});
        if (users.length >0 ) {
          this.setState({foundUsers: users});
        } else {
          this.setState({foundUsers: ["no user found"]})
        }
    }).bind(this);
    UserSearchAPI(query, success);
  }

  render() {
    if (this.state.isSearchDone) {
      return(
        <div className = "search">
          <input type = "text"
          className = "search-field"
          value = {this.state.query}
          onChange = {this.handleInputChange.bind(this)}
          placeholder = "            search user"/>
        <ul className = "search-result">
        {this.state.foundUsers.map((user, indx) => {
          return (<UserSearchItem key = {indx} user = {user}/>);
          })}
          </ul>
        </div>
      );
    } else {
      return (
        <div className = "search">
            <input type = "text"
            value = {this.state.query}
            onChange = {this.handleInputChange.bind(this)}
            placeholder = "           search user"/>

        </div>
      );
    }
  }
}

export default UserSearch;
