import React from 'react';
import {DeleteConstants} from '../../actions/delete_actions';
import Confirmation from './confirmation';
class DeleteButton extends React.Component{
  constructor(props) {
    super(props);
    //  toDelete: image or comment
    this.state = {
      type: null,
      toDelete: null,
      renderable: false,
      confirmation: false
    };
  }

  componentWillMount() {
    if (this.props.image &&
      (this.props.currentUser.id === this.props.image.user.id)) {
      this.setState({type: DeleteConstants.DELETE_IMAGE});
      this.setState({toDelete: this.props.image});
      this.setState({renderable: true});
    } else if (this.props.comment &&
    (this.props.currentUser.user_name === this.props.comment.author_name)) {
      this.setState({type: DeleteConstants.DELETE_COMMENT});
      this.setState({toDelete: this.props.comment});
      this.setState({renderable: true});
    }
  }

  deleteThis() {
    this.setState({confirmation: true});
  }

  render() {
    if (this.state.confirmation) {
      return <Confirmation {...this.props}
              type = {this.state.type}
              toDelete = {this.state.toDelete}
              deleteThis = {this.props.deleteThis.bind(this)}/>;

    }
    if (this.state.renderable) {
      if (this.state.type === "DELETE_IMAGE") {
        return(
          <span className = "glyphicon glyphicon-trash" id = {this.state.type}
          onClick = {this.deleteThis.bind(this)}/>);
      } else if( this.state.type === "DELETE_COMMENT") {
        return(
          <span className = "glyphicon glyphicon-remove-circle" id = {this.state.type}
          onClick = {this.deleteThis.bind(this)}/>);
      }
      } else {
        return <div/>;
      }
    }
}


export default DeleteButton;
