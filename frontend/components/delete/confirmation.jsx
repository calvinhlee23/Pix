import React from 'react';
import DeleteButton from './delete_button';
class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmation: null
    };
  }

  handleYes() {
    this.props.deleteThis(this.props.type, this.props.toDelete);
    this.setState({confirmation: "YES"});
  }

  hanldeNo() {
    this.setState({confirmation: "NO"});
  }

  render () {
    if (this.state.confirmation === null) {
      return (
        <div id = "info" className = "confirmation-wrapper">
          <div className = "are-you-sure">are you sure? </div>
          <div className = "confirmation-yes"
               onClick = {this.handleYes.bind(this)}> yes</div>
          <div className = "confirmation-no"
               onClick = {this.hanldeNo.bind(this)}> no</div>
        </div>
      );
    } else if (this.state.confirmation === "NO") {
      return (
        <DeleteButton {...this.props}/>
      );
    }
  }
}


export default Confirmation;
