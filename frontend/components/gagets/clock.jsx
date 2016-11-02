import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dateObj: new Date(),
      clockTime: '',
      date: ''
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
    let newdateObStr = newDateOb.toString();
    var newdateObStr1 = newdateObStr.split(" ");
    var newdateObStr2 = newdateObStr.split(" ");
    let date = newdateObStr1.splice(0, newdateObStr1.length/2 +1).join(' ');
    let time = newdateObStr2.splice(newdateObStr2.length/2 +1).join(' ');
    time = time.split("GMT")[0];
    this.setState({dateObj: newDateOb});
    this.setState({clockTime: time});
    this.setState({date: date});
  }

  render (){
    var time = this.state.clockTime;
    var date = this.state.date;
    return (
      <div className = "clock">
        <div className = "clock-date">{date}</div>
        <div className = "clock-time">{time}</div>
      </div>
    );
  }
}

export default Clock;
