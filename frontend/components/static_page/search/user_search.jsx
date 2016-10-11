import React from 'react';

class UserSearch extends React.Component{
  render() {
    return(
      <div>
        <label>Search User: </label>
        <input type = "text" className = "search-field"/>
      </div>
    );
  }
}

export default UserSearch;
