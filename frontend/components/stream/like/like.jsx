import React from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeNum: 0,
      likeAbility: "Like"
    };
  }

componentDidMount() {
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
render() {
  return(
      <div className = "like">
        <div className = "like-num">{this.state.likeNum} likes</div>
        <button className = "like-button">{this.state.likeAbility}</button>
      </div>
    );
  }
}


export default Like;
