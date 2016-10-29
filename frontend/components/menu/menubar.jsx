import React from 'react';
import UploadButton from './upload_button';
import UserSearch from './search/user_search';
import {hashHistory } from 'react-router';
import Gagets from '../gagets/gagets';
import UserProfile from '../user_profile/user_profile';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
      var path = this.props.location.pathname.split("/");
      if (path[1] === "user") {
        var userName = path[2];
        this.props.requestTargetUser(userName);
        this.setState({loading: true});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      if (nextProps.location.pathname.split("/")[1] === "user") {
        var path = nextProps.location.pathname.split("/");
        var userName = path[2];
        this.props.requestTargetUser(userName);
        this.setState({loading: true});
      } else {
        this.setState({loading: false});
      }
    }
  }
  ownRequestImages(imageType) {
    return () => {
      hashHistory.push(`/${imageType}`);
      this.props.requestImages(imageType);
    };
  }

  toLogOut() {
    hashHistory.push('/logout');
  }

  toHome() {
    event.preventDefault();
    hashHistory.push('/');
  }

  render() {
    if (this.state.loading) {
      return(
        <div>
        <div className = "menu-bar">
        <div id = "user">
        <div className = "glyphicon glyphicon-home"
        onClick = {this.toHome.bind(this)}
        id = "home"/>
        <h2>Hello {this.props.currentUser.user_name}</h2>
        <button onClick = {this.toLogOut.bind(this)}>Logout</button></div>
        <UserProfile {...this.props}/>
        </div>

        <aside className = "stream-menu-wrapper">
        <Gagets/>
        <ul className = "stream-menu">
        <li id = "following-stream-menu"
        onClick = {this.ownRequestImages("followingImages")}>
        Following Stream</li>
        <li id = "public-stream-menu"
        onClick = {this.ownRequestImages("publicImages")}>Public Stream</li>
        <li id = "my-stream-menu"
        onClick = {this.ownRequestImages("myImages")}>My Stream</li>
        <li id = "upload-button"><UploadButton id = "upload-button"
        postImage = {this.props.postImage.bind(this)}/></li>
        <UserSearch className = "user-search"/>
        </ul>
        </aside>
        </div>
      );
    } else {
      return(
        <div>
        <div className = "menu-bar">
        <div id = "user">
        <div className = "glyphicon glyphicon-home"
        onClick = {this.toHome.bind(this)}
        id = "home"/>
        <h2>Hello {this.props.currentUser.user_name}</h2>
        <button onClick = {this.toLogOut.bind(this)}>Logout</button></div>
        </div>

        <aside className = "stream-menu-wrapper">
        <Gagets/>
        <ul className = "stream-menu">
        <li id = "following-stream-menu"
        onClick = {this.ownRequestImages("followingImages")}>
        Following Stream</li>
        <li id = "public-stream-menu"
        onClick = {this.ownRequestImages("publicImages")}>Public Stream</li>
        <li id = "my-stream-menu"
        onClick = {this.ownRequestImages("myImages")}>My Stream</li>
        <li id = "upload-button"><UploadButton id = "upload-button"
        postImage = {this.props.postImage.bind(this)}/></li>
        <UserSearch className = "user-search"/>
        </ul>
        </aside>
        </div>
      );
    }
  }
}

export default MenuBar;
