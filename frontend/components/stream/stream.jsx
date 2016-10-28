import React from 'react';
import Infinite from 'react-infinite';
import Frame from './frame';
class Stream extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // initially adds 3 frames when loaded
      frames: [],
      imagesKeysArray: [],
      loading: false
    };
  }

  prepareStream(nextProps) {
    var path;
    if (nextProps) {
      this.setState({frames:[]});
      path = nextProps.location.pathname.split("/");
    } else {
      path = this.props.location.pathname.split("/");
    }
    if (path[1] === "user") {
      this.setState({path: path});
      var userName = path[2];
      this.props.requestImages("userImages", userName);
    } else if (path[1] === "followingImages" ||
               path[1] === "myImages" ||
               path[1] === "publicImages") {
      this.props.requestImages(path[1]);
    }
    setTimeout(() => {
      this.setState({imagesKeysArray:
                     Object.keys(this.props.images).reverse()});
      this.addFrames(6);
    }, 200);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.prepareStream(nextProps);
    } else if (this.didAddImg(nextProps.images)) {

    } else if (this.didRemoveImg(nextProps.images)) {

    } else {
      // most likely added/removed comment;
    }
  }
  didAddImg(newImages) {
    var oldLng = this.state.imagesKeysArray.length;
    var newLng = Object.keys(this.props.images).length;
    if (newLng > oldLng ) {
      return true;
    }
    return false;
  }

  didRemoveImg(newImages) {
    var oldLng = this.state.imagesKeysArray.length;
    var newLng = Object.keys(this.props.images);
    if(newLng < oldLng) {
      return true;
    }
    return false;
  }

  componentWillMount() {
    this.prepareStream();
  }

  generateStream() {
    if (this.props.targetUser.user_name) {
      return(<UserBio {...this.props}/>);
    }
  }

  addFrames(thisMany) {
    var elements = [];
    var currentFrameLength = this.state.frames.length;
    for (var i = currentFrameLength; i < currentFrameLength+thisMany; i++) {
      var imgId = this.state.imagesKeysArray[i];
        if (imgId) {

        var frame = <Frame image = {this.props.images[imgId]}
                           postComment = {this.props.postComment}
                           deleteThis = {this.props.deleteThis}
                           currentUser = {this.props.currentUser}
                           processLike = {this.props.processLike}
                           key = {imgId}/>;
        elements.push(frame);
      }
    }
    this.setState({frames: this.state.frames.concat(elements)});
    this.setState({loading: false});
  }

  handleInfiniteLoad() {
    this.setState({loading: true});
    setTimeout(() => {
      this.addFrames(6);
    }, 200);
  }
  render() {
    // infinite loades 3 rows of frames per.
    return (
      <div className = "stream">
        <ul className = "stream-frame">
        {/* loades 6 frames per */}
        <Infinite elementHeight={660}
                  useWindowAsScrollContainer
                  infiniteLoadBeginEdgeOffset={330}
                  onInfiniteLoad={this.handleInfiniteLoad.bind(this)}
                  isInfiniteLoading={this.state.loading}>
        {this.state.frames}
        </Infinite>
        </ul>
      </div>
    );
  }
}

export default Stream;
