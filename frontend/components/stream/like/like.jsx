import React from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeNum: 0,
      likeAbility: "Like",
      button: ""
    };
  }

componentDidMount() {
  // likes => [{author_id: x},....]
  var likes = this.props.image.likes;
  this.setState({likeNum: likes.length});
  this.setState({button: "glyphicon glyphicon-star-empty"});
  likes.forEach((like) => {
    if (like.author_id === this.props.currentUser.id) {
      this.setState({likeAbility: "Unlike"});
      this.setState({button: "glyphicon glyphicon-star"});
      return;
    }
  });
}

handleClick () {
  event.preventDefault();
  var likes = this.props.image.likes;
  if (this.state.likeAbility === "Like") {
    this.props.processLike(this.state.likeAbility, this.props.image.id);
    this.setState({likeNum: this.state.likeNum += 1});
    this.setState({likeAbility: "Unlike"});
  } else {
    this.props.processLike(this.state.likeAbility, this.props.image.id);
    this.setState({likeNum: this.state.likeNum -= 1});
    this.setState({likeAbility: "Like"});
  }
}
render() {
  return(
      <div className = "like" id = "info">
        <div className = "like-num" >{this.state.likeNum} likes</div>
          <span className = "like-button"
            onClick = {this.handleClick.bind(this)}>
            {this.state.likeAbility}</span>
      </div>
    );
  }
}


export default Like;
