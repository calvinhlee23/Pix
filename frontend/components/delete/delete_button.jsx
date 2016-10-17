import React from 'react';
import {DeleteConstants} from '../../actions/delete';

class DeleteButton extends React.Component{
  constructor(props) {
    super(props);
    //  toDelete: image or comment
    this.state = {
      type: null,
      toDelete: null
    };
  }

  componentWillMount() {
    if (this.props.image) {
      this.setState({type: DeleteConstants.DELETE_IMAGE});
      this.setState({toDelete: this.props.image});
    } else if (this.props.comment) {
      this.setState({type: DeleteConstants.DELETE_COMMENT});
      this.setState({toDelete: this.props.comment});
    }
  }

  deleteThis() {
    event.preventDefault();
    return () => {
      var confirm = window.confirm("Press a button!");
      if (confirm === true) {
        console.log(this.state.toDelete);
          // this.props.deleteThis(this.state.type, this.state.toDelete);
      }
    };
  }

  render() {
    return(
      <button className = "delete"
      onClick = {this.deleteThis(this.state.toDelete).bind(this)}>
      Delete</button>);
  }
}


export default DeleteButton;
