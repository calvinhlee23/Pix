import React from 'react';
import UserSearchItem from './user_search_item';
import Loader from '../../../util/loader';
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
    this.setState({isSearchDone: false});
    this.setState({query: event.currentTarget.value});
    this.setState({foundUsers: []});
    // waits for the query state to update
    window.setTimeout(() => {
      if (this.state.query.length > 0) {
        console.log(this.state.query);
          this.requestUsers(this.state.query);
      }
    }, 1000);
  }

  requestUsers(query) {
    var success = ((users) => {
      this.setState({isSearchDone: true});
      this.setState({foundUsers: users});
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
      return(
        <div className = "search">
        <label>Search User:
          <input type = "text"
          className = "search-field"
          value = {this.state.query}
          onChange = {this.handleInputChange.bind(this)}/>
        </label>
        <ul className = "search-result">
          <Loader search = {true}/>
        </ul>
        </div>
      );
    }
  }
}

export default UserSearch;
