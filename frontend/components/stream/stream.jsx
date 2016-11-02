import React from 'react';
import Frame from './frame';
import {hashHistory} from 'react-router';
import Loader from '../../util/loader';
import Infinite from 'react-infinite';

class Stream extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      var path = nextProps.location.pathname.split("/");
      if (path[1] === "user") {
        var userName = path[2];
        this.props.requestImages("userImages", userName);
      } else if (path[1] === "followingImages" ||
                 path[1] === "myImages" ||
                 path[1] === "publicImages") {
        this.props.requestImages(path[1]);
      }
    }
  }

  componentDidMount() {
    var path = this.props.location.pathname.split("/");
    if (path[1] === "user") {
      var userName = path[2];
      this.props.requestImages("userImages", userName);
    } else if (path[1] === "followingImages" ||
               path[1] === "myImages" ||
               path[1] === "publicImages") {
      this.props.requestImages(path[1]);
    }
  }

  render() {
    // infinite loades 3 rows of frames per.
    return (
      <div className = "stream">
      <ul className = "stream-frame">
      <Infinite useWindowAsScrollContainer
                // 1 frame is 600 elementHeight200 gives us 3 frames
                // loading per 100 gives us another row
                elementHeight = {200}
                infiniteLoadBeginEdgeOffset={100}>
        {Object.keys(this.props.images).reverse().map((imgId)=> {
          return <Frame image = {this.props.images[imgId]}
          currentUser = {this.props.currentUser}
          postComment = {this.props.postComment}
          deleteThis = {this.props.deleteThis.bind(this)}
          processLike = {this.props.processLike}
          key = {imgId}/>;
        })}
      </Infinite>
      </ul>
      </div>
    );
  }
}

export default Stream;
