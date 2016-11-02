import React from 'react';
import UploadButton from './upload_button';
import UserSearch from './search/user_search';
import {hashHistory, Link} from 'react-router';
import Gagets from '../gagets/gagets';
import UserProfile from '../user_profile/user_profile';
import GearButton from './gear_button';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadProfile: false
    };
  }

  componentDidMount() {
      var path = this.props.location.pathname.split("/");
      if (path[1] === "user") {
        var userName = path[2];
        this.props.requestTargetUser(userName);
        this.setState({loadProfile: true});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      if (nextProps.location.pathname.split("/")[1] === "user") {
        var path = nextProps.location.pathname.split("/");
        var userName = path[2];
        this.props.requestTargetUser(userName);
        this.setState({loadProfile: true});
      } else {
        this.setState({loadProfile: false});
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

  generateStreamMenu() {
    return (
      <ul className = "stream-menu">
      <li id = "following-stream-menu"
      onClick = {this.ownRequestImages("followingImages")}>
      Following</li>
      <li id = "public-stream-menu"
      onClick = {this.ownRequestImages("publicImages")}>Public</li>
      <li id = "my-stream-menu"
      onClick = {this.ownRequestImages("myImages")}>My Stream</li>
      <li id = "upload-button"><UploadButton id = "upload-button"
      postImage = {this.props.postImage.bind(this)}/></li>
      </ul>
    );
  }

  generateUserMenu() {
    return(
        <div className = "gear-wrapper">
        <GearButton
          {...this.props}
          toLogOut = {this.toLogOut.bind(this)}/>
        </div>
    );
  }

  generateTopMenu() {
    return (
      <div className = "top-menu">
        {this.generateUserMenu()}
        {this.generateStreamMenu()}
      </div>
    );
  }

  toTop () {
    window.scrollTo(0, 0);
  }
  generateSideMenu() {
    return (
      <aside className = "side-menu-wrapper">
      <Gagets/>
      <UserSearch className = "user-search"/>
      <div className = "glyphicon glyphicon-arrow-up" onClick = {this.toTop}/>
      </aside>
    );
  }

  render() {
    if (this.state.loadProfile) {
      return(
        <div>
        <div className = "menu-bar">
          {this.generateTopMenu()}
          <UserProfile {...this.props}/>
          {this.generateSideMenu()}
        </div>
        </div>
      );
    } else {
      return(
        <div>
        <div className = "menu-bar">
        {this.generateTopMenu()}
        {this.generateSideMenu()}
        </div>
        </div>
      );
    }
  }
}

export default MenuBar;
