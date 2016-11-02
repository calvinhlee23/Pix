import React from 'react';
import Frame from './frame';
import {hashHistory} from 'react-router';
import Loader from '../../util/loader';
import Infinite from 'react-infinite';

class Stream extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: false,
      numFrames: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({numFrame: 6});
    if (nextProps.location.pathname !== this.props.location.pathname) {
      var path = nextProps.location.pathname.split("/");
      if (path[1] === "user") {
        var userName = path[2];
        this.props.requestImages("userImages", userName, 6);
      } else if (path[1] === "followingImages" ||
                 path[1] === "myImages" ||
                 path[1] === "publicImages") {
        this.props.requestImages(path[1], null,  6);
      }
    }
  }

  componentDidMount() {
    this.setState({numFrame: 6});
    var path = this.props.location.pathname.split("/");
    if (path[1] === "user") {
      var userName = path[2];
      this.props.requestImages("userImages", userName, 6);
    } else if (path[1] === "followingImages" ||
               path[1] === "myImages" ||
               path[1] === "publicImages") {
      this.props.requestImages(path[1], null, 6);
    }
  }

  addSixMore() {
    this.setState({numFrames: this.state.numFrames += 6});
    this.setState({loading: true});
    var path = this.props.location.pathname.split("/");
    if (path[1] === "user") {
      var userName = path[2];
      this.props.requestImages("userImages", userName, this.state.numFrames);
      setTimeout(() => {this.setState({loading:false});}, 1000);
    } else if (path[1] === "followingImages" ||
               path[1] === "myImages" ||
               path[1] === "publicImages") {
      this.props.requestImages(path[1], null, this.state.numFrames);
      setTimeout(() => {this.setState({loading:false});}, 1000);
    }
  }


  render() {
    // infinite loades 3 rows of frames per.
    return (
      <div className = "stream">
      <ul className = "stream-frame">
      <Infinite useWindowAsScrollContainer
                // 1 frame is 600. elementHeight 200 gives us 3 frames
                // loading per 100 gives us another row
                elementHeight = {200}
                infiniteLoadBeginEdgeOffset={100}
                onInfiniteLoad = {this.addSixMore.bind(this)}
                isInfiniteLoading={this.state.loading}
                timeScrollStateLastsForAfterUserScrolls = {0}>
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
