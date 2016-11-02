import React from 'react';
import Frame from './frame';
import {hashHistory} from 'react-router';
import Loader from '../../util/loader';

class Stream extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      needLoader: true
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({needLoader: true});
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
    setTimeout(() => {
      this.setState({needLoader:false});
    }, 1500);
  }

  componentDidMount() {
    this.setState({needLoader: true});
    var path = this.props.location.pathname.split("/");
    if (path[1] === "user") {
      var userName = path[2];
      this.props.requestImages("userImages", userName);
    } else if (path[1] === "followingImages" ||
               path[1] === "myImages" ||
               path[1] === "publicImages") {
      this.props.requestImages(path[1]);
    }
    setTimeout(() => {
      this.setState({needLoader:false});
    }, 1500);
  }

  render() {
    // infinite loades 3 rows of frames per.
    if (this.state.needLoader) {
      return (
        <Loader className = "stream-loader"/>
      );
    } else {
      return (
        <div className = "stream">
          <ul className = "stream-frame">
          {Object.keys(this.props.images).reverse().map((imgId)=> {
            return <Frame image = {this.props.images[imgId]}
            currentUser = {this.props.currentUser}
            postComment = {this.props.postComment}
            deleteThis = {this.props.deleteThis.bind(this)}
            processLike = {this.props.processLike}
            key = {imgId}/>;
          })}
          </ul>
        </div>
      );
    }
  }
}

export default Stream;
