import React from 'react';
import hashHistory from 'react-router';

class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderConfirm: false,
      response: null
    };
  }

  toConfirm() {
    console.log('hihi');
    this.setState({renderConfirm: true});
  }

  handleYes() {
    this.props.toLogOut();
  }

  handleNo() {
    this.setState({renderConfirm: false});
  }

  render ()  {
    if (this.state.renderConfirm) {
      return(
        <span id = "info" className = "confirmation-wrapper-logout">
        <div className = "logout"
        onClick = {this.handleYes.bind(this)}>Log out &nbsp;</div>
        <div className = "logout-no"
        onClick = {this.handleNo.bind(this)}> cancel</div>
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
export default LogoutButton
