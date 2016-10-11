import React from 'react';
import Frame from './frame';
import MenuBar from './menubar';

class Stream extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className = "stream">
      <MenuBar {...this.props}/>
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
