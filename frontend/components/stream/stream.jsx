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
      numFrames: 6
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('receiveprops');
    if (nextProps.location.pathname !== this.props.location.pathname) {
      console.log('did something');
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
      var path = this.props.location.pathname.split("/");
      console.log('mount');
      this.setState({numFrame: 12});
      if (path[1] === "user") {
        var userName = path[2];
        this.props.requestImages("userImages", userName, 6);
      } else if (path[1] === "followingImages" ||
                 path[1] === "myImages" ||
                 path[1] === "publicImages") {
        this.props.requestImages(path[1], null,  6);
      }
  }
  addSixMore() {
    console.log('sixmore');
    this.setState({numFrames: this.state.numFrames += 6});
    this.setState({loading: true});
    var path = this.props.location.pathname.split("/");
    if (path[1] === "user") {
      var userName = path[2];
      this.props.requestImages("userImages", userName, this.state.numFrames);
      setTimeout(() => {this.setState({loading:false});}, 100);
    } else if (path[1] === "followingImages" ||
    path[1] === "myImages" ||
    path[1] === "publicImages") {
      this.props.requestImages(path[1], null, this.state.numFrames);
      setTimeout(() => {this.setState({loading:false});}, 100);
    }
  }

  generateFrames() {
    var frames = Object.keys(this.props.images).reverse().map((imgId)=> {
      return <Frame image = {this.props.images[imgId]}
      currentUser = {this.props.currentUser}
      postComment = {this.props.postComment}
      deleteThis = {this.props.deleteThis.bind(this)}
      processLike = {this.props.processLike}
      key = {imgId}/>;
    });
    return frames;
  }
  render() {
    // infinite loades 3 rows of frames per.
    return (
      <div className = "stream">
      <ul className = "stream-frame">
      <Infinite className = "infinite-scroll"
                // containerHeight = {1000}
                useWindowAsScrollContainer
                infiniteLoadBeginEdgeOffset={1200}
                elementHeight = {1200}
                timeScrollStateLastsForAfterUserScrolls = {0}
                onInfiniteLoad = {this.addSixMore.bind(this)}
                isInfiniteLoading={this.state.loading}>
        <div>{this.generateFrames()}</div>
      </Infinite>
      </ul>
      </div>
    );
  }
}

export default Stream;
