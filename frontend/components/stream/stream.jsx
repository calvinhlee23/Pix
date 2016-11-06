import React from 'react';
import Frame from './frame';
import {hashHistory} from 'react-router';
import Loader from '../../util/loader';
import Infinite from 'react-infinite';

class Stream extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      numFrames: 6,
      scrollableHeight: 0,
      previousScrollHeight: 0,
      loading: false
    };
  }
  componentDidMount() {
    var path = this.props.location.pathname.split("/");
    setTimeout(() => {
      if (path[1] === "user") {
        var userName = path[2];
        this.props.requestImages("userImages", userName, 6);
      } else if (path[1] === "followingImages" ||
      path[1] === "myImages" ||
      path[1] === "publicImages") {
        this.props.requestImages(path[1], null,  6);
      }
    }, 100);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({loading: true});
      this.setState({scrollableHeight: 0});
      this.setState({previousScrollHeight: 0});
      setTimeout(() => {
        var path = nextProps.location.pathname.split("/");
        if (path[1] === "user") {
          var userName = path[2];
          this.props.requestImages("userImages", userName, 6);
        } else if (path[1] === "followingImages" ||
        path[1] === "myImages" ||
        path[1] === "publicImages") {
          this.props.requestImages(path[1], null,  6);
        }
      }, 150);
      setTimeout(()=> {
        this.setState({loading:false});
      }, 1500);
    }
  }

  addSixMore() {
    this.setState({scrollableHeight: window.document.body.scrollHeight});
    if (this.state.previousScrollHeight < this.state.scrollableHeight) {
      this.setState({previousScrollHeight: this.state.scrollableHeight});
      this.setState({numFrames: this.state.numFrames += 6});
      this.setState({scrollableHeight: (window.document.body.scrollHeight)});
      var path = this.props.location.pathname.split("/");
      if (path[1] === "user") {
        var userName = path[2];
        this.props.requestImages("userImages", userName, this.state.numFrames);
      } else if (path[1] === "followingImages" ||
      path[1] === "myImages" ||
      path[1] === "publicImages") {
        this.props.requestImages(path[1], null, this.state.numFrames);
      }
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
    if (this.state.loading) {
      return <Loader/>;
    } else {
      if (this.state.scrollableHeight) {
        return (
          <div className = "stream">
          <ul className = "stream-frame">
          <Infinite className = "infinite-scroll"
          useWindowAsScrollContainer
          infiniteLoadBeginEdgeOffset= {200}
          elementHeight = {this.state.scrollableHeight}
          onInfiniteLoad = {this.addSixMore.bind(this)}>
          <div>{this.generateFrames()}</div>
          </Infinite>
          </ul>
          </div>
        );
      } else {
        return (
          <div className = "stream">
          <ul className = "stream-frame">
          <Infinite className = "infinite-scroll"
          useWindowAsScrollContainer
          infiniteLoadBeginEdgeOffset= {200}
          elementHeight = {1400}
          timeScrollStateLastsForAfterUserScrolls = {0}
          onInfiniteLoad = {this.addSixMore.bind(this)}>
          <div>{this.generateFrames()}</div>
          </Infinite>
          </ul>
          </div>
        );
      }
    }
  }
}

export default Stream;
