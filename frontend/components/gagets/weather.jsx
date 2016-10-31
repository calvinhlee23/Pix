import React from "react";

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      geoLoc: '',
      location: '',
      temp: ''
    };

    this.getLocationInfo = this.getLocationInfo.bind(this);

  }


  getLocationInfo () {
    navigator.geolocation.getCurrentPosition((success) => {
      let geoLoc = success.coords;
      let lat = geoLoc.latitude;
      let longi = geoLoc.longitude;
      var url =
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longi}`;
      url += `&&APPID=645c5d39c7603f17e23fcaffcea1a3c1`;


      var request = new XMLHttpRequest();
      request.onreadystatechange = () => {
        if (request.status === 200 &&
          request.readyState === XMLHttpRequest.DONE) {
            const data = JSON.parse(request.responseText);
            this.setState({location: data.name, temp:data.main.temp});
            // this.setState({temp: data.main.temp});
          }
        };
        request.open('GET', url, true);
        request.send();
    });

  }

  componentDidMount() {
    this.getLocationInfo();
  }


  render () {
    if (!this.state.location) {
      return (
        <div className = 'weather'>
          <a className = 'weather-gathering' >
                Gathering Location Information...</a>
        </div>
      );
    }
    else {
      return (
        <div className = 'weather'>
        <ul>
          <li className = "weather-temp">
          {Math.floor((this.state.temp- 273.15) * 1.8 + 32)}°F &nbsp;
          </li>
          <li className = "weather-city">
          {this.state.location}</li>
        </ul>
        </div>
      );
    }
  }
}

export default Weather;
