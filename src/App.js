import React, { Component } from 'react';
import './App.css';

import MyMap from './MyMap';
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="App-header">
          <h1>Store Locator</h1>
        </div>
        <form className="form-inline search-form">
          <label className="sr-only" htmlFor="search-box">Postcode</label>
          <input type="text" id="search-box" className="search-box form-control mr-2 mb-4" placeholder="Postcode" />
          <button className="btn btn-primary mr-2 mb-4">Find stores</button>
          <button className="btn btn-primary mb-4">Near me</button>
        </form>
        <div className="row">
          <div className="col-md-4">
            <Sidebar />
          </div>
          <div className="col-md-8">
            <MyMap />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
