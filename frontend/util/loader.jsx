var React = require('react');
var Loading = require('react-loading');

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
    window.count = window.setInterval(() => {
      this.setState({time: this.state.time += .5 });
    }, 500);
  }

  componentWillUnmount() {
    window.clearInterval(window.count);
  }

  render() {
    if (this.state.time < 3 && this.state.time >=.5) {
      return(
        <div className = "loading"/>
      );
    } else if (this.state.time >= 3) {
      return (<div>Page Not Found</div>);
    } else {
      return (<div/>);
    }
  }
}

export default Loader;
