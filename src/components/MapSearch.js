import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import './MapSearch.css';

class MapSearch extends Component {
  onFindStoresClick = () => {
    this.props.onSearchPostcode("LS10 123");
  }

  render() {
    return (
      <div className="form-inline search-form">
        <label className="sr-only" htmlFor="search-box">Postcode</label>
        <input type="text" id="search-box" className="search-box form-control mr-2 mb-4" placeholder="Postcode" />
        <button className="btn btn-primary mr-2 mb-4" onClick={this.onFindStoresClick}>Find stores</button>
        <button className="btn btn-primary mb-4">Near me</button>
      </div>
    );
  }
}

MapSearch.propTypes = {
  onSearchPostcode: PropTypes.func.isRequired
};

export default MapSearch;
