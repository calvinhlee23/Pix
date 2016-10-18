import React from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeNum: 0,
      likeAbility: "Like"
    };
  }

componentWillMount() {
  // likes => [{author_id: x},....]
  var likes = this.props.image.likes;
  this.setState({likeNum: likes.length});
  likes.forEach((like) => {
    if (like.author_id === this.props.currentUser.id) {
      this.setState({likeAbility: "Unlike"});
      return;
    }
  });
}

handleClick () {
  event.preventDefault();
  var likes = this.props.image.likes;
  if (this.state.likeAbility === "Like") {
    this.props.processLike(this.state.likeAbility, this.props.image.id);
    this.setState({likeNum: likes.length +=1});
    this.setState({likeAbility: "Unlike"});
  } else {
    this.props.processLike(this.state.likeAbility, this.props.image.id);
    this.setState({likeNum: likes.length -=1});
    this.setState({likeAbility: "Like"});
  }
}
render() {
  return(
      <div className = "like">
        <div className = "like-num" >{this.state.likeNum} likes</div>
        <button className = "like-button"
          onClick = {this.handleClick.bind(this)}>
          {this.state.likeAbility}</button>
      </div>
    );
  }
}


export default Like;
