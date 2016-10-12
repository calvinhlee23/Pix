import React from 'react';

class UserProfile extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestImages("userImages",
                              this.props.location.query.user);
  }
  render() {
    return (
      // browswer: /?user=abc
      // query: {"user":"abc"} when rendered
      <div>
      <h2>{`${this.props.location.query.user}'s Stream`}</h2>
      {this.props.streamGenerator()}
      </div>
    );
  }
}

export default UserProfile;
