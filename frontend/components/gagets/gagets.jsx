import React from 'react';
import Clock from './clock';
import Weather from './weather';
import {hashHistory} from 'react-router';

class Gagets extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
      return (
        // <div className = "stream" >
        <div className = "gagets-wrapper">
        <Clock className = "gaget-clock"/>
        <Weather className = "gaget-weather"/>
        </div>

      );
    }
}

export default Gagets;
