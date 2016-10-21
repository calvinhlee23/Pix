import React from 'react';
import UserSearchItem from './user_search_item';
import Loader from '../../../util/loader';

class UserSearch extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      query: "",
      foundUserNames: [],
      searchDone: false
    };
  }

  handleInputChange() {

  }

  render() {
    if (this.state.searchDone) {
      return(
        <div className = "search">
        <label>Search User:
          <input type = "text"
          className = "search-field"
          value = {this.state.query}
          onChange = {this.handleInputChange.bind(this)}/>
        </label>
        <ul className = "search-result">
        {this.state.foundUserNames.map((userName, indx) => {
          return (<UserSearchItem key = {indx}
            userName = {userName}/>);
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
