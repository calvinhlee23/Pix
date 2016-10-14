var React = require('react');
var Loading = require('react-loading');

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState({time: this.state.time +=1 });
    }, 1000);
  }

  render() {
    if (this.state.time < 3) {
      return(
        <Loading type='spin' color='dark-grey' className = "loader"/>
      );
    } else {
      return(
        <div>User Does Not Exist</div>
      );
    }
  }
}

export default Loader;
