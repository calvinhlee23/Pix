import React from 'react';
import {DeleteConstants} from '../../actions/delete_actions';

class DeleteButton extends React.Component{
  constructor(props) {
    super(props);
    //  toDelete: image or comment
    this.state = {
      type: null,
      toDelete: null,
      renderable: false
    };
  }

  componentWillMount() {
    if (this.props.image &&
      (this.props.currentUser.id === this.props.image.user.id)) {
      this.setState({type: DeleteConstants.DELETE_IMAGE});
      this.setState({toDelete: this.props.image});
      this.setState({renderable: true});
    } else if (this.props.comment &&
    (this.props.currentUser.id === this.props.comment.author_id)) {
      this.setState({type: DeleteConstants.DELETE_COMMENT});
      this.setState({toDelete: this.props.comment});
      this.setState({renderable: true});
    }
  }

  deleteThis() {
    event.preventDefault();
    return () => {
      var confirm = window.confirm("You are about to DELETE this item");
      if (confirm === true) {
        console.log(this.state.toDelete);
        this.props.deleteThis(this.state.type, this.state.toDelete);
      }
    };
  }

  render() {
    if (this.state.renderable) {
      return(
        <button className = "delete" id = {this.state.type}
        onClick = {this.deleteThis(this.state.toDelete).bind(this)}>
        Delete</button>);
      } else {
        return <div/>;
      }
    }
}


export default DeleteButton;
