import React from 'react';
import Frame from './frame';

class Stream extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.location.query.user) {
      this.props.requestImages("userImages",
                               this.props.location.query.user);
      // come up with reqeustUser
    }
  }
  
  ifLookingAtUser() {
      if (this.props.location.query.user) {

        return (
          // browswer: /?user=abc
          // query: {"user":"abc"}
          <h2>{`${this.props.location.query.user}'s Stream`}</h2>
          // replace above with <UserProfile {...this.props}/>
        );
    }
  }
  render() {
    return (
      <div className = "stream">
      {/* in each li, <FRAME/> will be inserted with img componenet  */}
      {this.ifLookingAtUser()}
          IMGES
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
