import React from 'react';
import UserSearchItem from './user_search_item';
import {UserSearchAPI} from '../../../util/user_search_api_util';
import Loader from '../../../util/loader';

class UserSearch extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      query: "",
      foundUsers: ["no user found"],
      isSearchDone: true
    };
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({isSearchDone: false});
    this.setState({query: event.currentTarget.value});
    this.setState({foundUsers: ["no user found"]});
    // waits for the query state to update
    window.setTimeout(() => {
      if (this.state.query.length > 0) {
          this.requestUsers(this.state.query);
      }
    }, 1000);
  }

  requestUsers(query) {
    var success = ((users) => {
      if (users.length > 0 ) {
        this.setState({isSearchDone: true});
        this.setState({foundUsers: users});
      }
    }).bind(this);
    UserSearchAPI(query, success);
  }

  render() {
    if (this.state.isSearchDone) {
      return(
        <div className = "search">
        <label>Search User:
          <input type = "text"
          className = "search-field"
          value = {this.state.query}
          onChange = {this.handleInputChange.bind(this)}/>
        </label>
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
        <label className = "search-field">Search User:
          <input type = "text"
          value = {this.state.query}
          onChange = {this.handleInputChange.bind(this)}/>
        </label>
        <Loader search = {true}/>
        </div>
      );
    }
  }
}

export default UserSearch;
