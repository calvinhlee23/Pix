var React = require('react');

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
    window.count = window.setInterval(() => {
      this.setState({time: this.state.time += .200});
    }, 200);
  }

  componentWillUnmount() {
    window.clearInterval(window.count);
  }

  render() {
    if (this.state.time < 3 && this.state.time >=.5) {
      return(
        <div className = "loader-wrapper">
        <div className = "loading"/>
        </div>
      );
    } else if (this.state.time >= 3) {
      if (this.props.search) {
        return(<div/>);
      } else {
        return (<div className = "not-found">Page Not Found</div>);
      }
    } else {
      return (<div/>);
    }
  }
}

export default Loader;
