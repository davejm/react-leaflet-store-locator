import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
  render() {
    return (
      <li className="result">
        <h1 className="h3">Leeds</h1>
        <div className="distance">0.2 Miles / 0.4 Km</div>
        <div className="address">123 Leeds Rd, Leeds, LS1 62Q</div>
        <div className="telephone">0113 123 1234</div>
      </li>
    );
  }
}

export default Result;
