import React from 'react';
import Frame from './frame';

class Stream extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className = "stream">
      {/* in each li, <FRAME/> will be inserted with img componenet  */}
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
