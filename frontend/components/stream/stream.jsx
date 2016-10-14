import React from 'react';
import Frame from './frame';
import UserProfile from '../user_profile/user_profile';

class Stream extends React.Component {
  constructor (props) {
    super(props);
  }

  ifLookingAtUser() {
      return (
        <UserProfile {...this.props}
          streamGenerator = {this.streamGenerator.bind(this)}/>
      );
  }

  streamGenerator() {
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

  render() {
    if (this.props.location.query.user) {
      return (
        <div>
          <UserProfile {...this.props}/>
          {this.streamGenerator()}
        </div>
      );

    } else {
      return(this.streamGenerator());
    }
  }
}

export default Stream;
