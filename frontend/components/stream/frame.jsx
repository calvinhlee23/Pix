import React from  'react';

class Frame extends React.Component {
  constructor (props) {
    super(props);
    console.log(props.image);
  }

  render() {
    return(
      <li key = {this.props.image.id} className = "Frame">
        {console.log(this.props.image)}
        <h1>{this.props.image.user.user_name}</h1>
        <img src = {this.props.image.cloud_url} id = "image"/>
        <div>{this.props.image.created_at}</div>
      </li>
    );
  }
}


export default Frame;
