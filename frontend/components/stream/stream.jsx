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
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({loading: true});
      this.setState({numFrame: 0});
      var path = nextProps.location.pathname.split("/");
      if (path[1] === "user") {
        var userName = path[2];
        this.props.requestImages("userImages", userName, 3);
      } else if (path[1] === "followingImages" ||
                 path[1] === "myImages" ||
                 path[1] === "publicImages") {
        this.props.requestImages(path[1], null,  3);
      }
    }
  }

  addSixMore() {
    console.log('hi');
    this.setState({numFrames: this.state.numFrames += 3});
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
    var frames = Object.keys(this.props.images).reverse().map((imgId)=> {
      console.log(this.props.images);
      return <Frame image = {this.props.images[imgId]}
      currentUser = {this.props.currentUser}
      postComment = {this.props.postComment}
      deleteThis = {this.props.deleteThis.bind(this)}
      processLike = {this.props.processLike}
      key = {imgId}/>;
    });
    return (
      <div className = "stream">
      <ul className = "stream-frame">
      <Infinite className = "infinite-scroll"
                useWindowAsScrollContainer
                elementHeight = {500}
                infiniteLoadBeginEdgeOffset={50}
                onInfiniteLoad = {this.addSixMore.bind(this)}
                isInfiniteLoading={this.state.loading}>
        <div>{frames}</div>
      </Infinite>
      </ul>
      </div>
    );
  }
}

export default Stream;
