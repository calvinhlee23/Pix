import React from 'react';
import Frame from './frame';

class Stream extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      path: null
    };
  }

  componentWillReceiveProps() {
    var path = this.props.location.pathname.split("/");
    if (path[1] === "user") {
      this.setState({path: path});
      var userName = path[2];
      this.props.requestImages("userImages", userName);
    }
  }
  componentDidMount() {
    var path = this.props.location.pathname.split("/");
    if (path[1] === "user") {
      this.setState({path: path});
      var userName = path[2];
      this.props.requestImages("userImages", userName);
    }
  }

  generateStream() {
    if (this.props.targetUser.user_name) {
      return(<UserBio {...this.props}/>);
    } else {
      return(<Loader/>);
    }
  }
  render() {
    return (
      <div className = "stream">
        <ul className = "stream-frame">
        {Object.keys(this.props.images).map((imgId) => {
          return <Frame image = {this.props.images[imgId]}
          postComment = {this.props.postComment}
          key = {imgId}/>;
        })}
        </ul>
      </div>
    );
  }
}

export default Stream;
