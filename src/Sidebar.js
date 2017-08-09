import React, { Component } from 'react';
import './Sidebar.css';

import Result from './Result';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="results">
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
        </ul>
      </div>
    );
  }
}

export default Sidebar;
