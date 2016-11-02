import React from 'react';
import {hashHistory, Link} from 'react-router';

class GearButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderConfirm: false,
      response: null
    };
  }

  toConfirm() {
    this.setState({renderConfirm: true});
  }

  handleYes() {
    this.props.toLogOut();
  }

  handleNo() {
    this.setState({renderConfirm: false});
  }

  toHome() {
    event.preventDefault();
    hashHistory.push('/');
  }

  render ()  {
    if (this.state.renderConfirm) {
      return(
        <span className = "confirmation-wrapper-logout">
        <div className = "glyphicon glyphicon-home"
        onClick = {this.toHome.bind(this)}
        id = "home"/>
        <Link to = {{pathname: `/user/${this.props.currentUser.user_name}`}}
              className = "to-profile">Profile </Link>
        <Link to = {{pathname: '/logout'}} className = "logout">Logout</Link>
        <Link className = "logout-no"
              onClick = {this.handleNo.bind(this)}> cancel</Link>
        </span>
      );
    } else {
      return (
        <span className = "glyphicon glyphicon-cog"
        onClick = {this.toConfirm.bind(this)} id = "logout-button"></span>
      );
    }
  }
}
export default GearButton;
