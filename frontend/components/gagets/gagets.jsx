import React from 'react';
import Clock from './clock';
import Weather from './weather';
import UserProfile from '../user_profile/user_profile';
import {hashHistory} from 'react-router';

class Gagets extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
      var path = this.props.location.pathname.split("/");
      if (path[1] === "user") {
        var userName = path[2];
        this.props.requestTargetUser(userName);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      if (nextProps.location.pathname.split("/")[1] === "user") {
        this.setState({loading: true});
        var path = nextProps.location.pathname.split("/");
        var userName = path[2];
        this.props.requestTargetUser(userName);
        setTimeout(() => {
          this.setState({loading: false});
        }, 300);
      }
    }
  }

  render () {
    if (this.props.targetUser.user_name) {
      return (
        // <div className = "stream" >
        <div className = "gagets-wrapper">
        <Clock className = "gaget-clock"/>
        <Weather className = "gaget-weather"/>
        <UserProfile {...this.props}/>
        </div>
      );
    }
    else {
      return (
        // <div className = "stream" >
        <div className = "gagets-wrapper">
        <Clock className = "gaget-clock"/>
        <Weather className = "gaget-weather"/>
        </div>

      );
    }
  }
}

export default Gagets;
