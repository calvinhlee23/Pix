import React from  'react';

class Frame extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return(
      <li>{JSON.stringify(this.props.image)}</li>
    );
  }
}


export default Frame;
