import React from 'react';
import Frame from './frame';

class Stream extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    var path = this.props.location.pathname.split("/");
    if (path[1] === "user") {
      this.setState({path: path});
      var userName = path[2];
      this.props.requestImages("userImages", userName);
    } else if (path[1] === "followingImages" ||
               path[1] === "myImages" ||
               path[1] === "publicImages") {
      this.props.requestImages(path[1]);
    }
  }

  generateStream() {
    if (this.props.targetUser.user_name) {
      return(<UserBio {...this.props}/>);
    }
  }
  render() {
    return (
      <div className = "stream">
        <ul className = "stream-frame">
        {Object.keys(this.props.images).map((imgId) => {
          return <Frame image = {this.props.images[imgId]}
          postComment = {this.props.postComment}
          deleteThis = {this.props.deleteThis}
          currentUser = {this.props.currentUser}
          key = {imgId}/>;
        })}
        </ul>
      </div>
    );
  }
}

export default Stream;
