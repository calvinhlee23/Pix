import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dateObj: new Date(),
      clockTime: '',
      date: '',
      amPM: ''
    };
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    window.clock = setInterval(this.tick, 1000);
  }

  componentWillUnmount () {
    window.clearInterval(window.clock);
  }

  tick() {
    let newDateOb = new Date();
    let date = newDateOb.toLocaleDateString();
    let time = newDateOb.toLocaleTimeString().split(" ");
    let timeTime = time[0].split(":")[0] + ":" + time[0].split(":")[1];
    let amPM = time[1];
    this.setState({dateObj: newDateOb});
    this.setState({clockTime: timeTime});
    this.setState({amPM: amPM});
    this.setState({date: date});
  }

  render (){
    var time = this.state.clockTime;
    var date = this.state.date;
    var amPM = this.state.amPM;
    return (
      <div className = "clock">
        <div className = "clock-time-wrapper">
          <div className = "clock-time">{time}</div>
          <div className = "clock-am-pm">{amPM}</div>
        </div>
        <div className = "clock-date">{date}</div>
      </div>
    );
  }
}

export default Clock;
