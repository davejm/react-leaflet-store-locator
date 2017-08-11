import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Results from './Results';
import MapSearch from './MapSearch';
import MyMap from './MyMap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

class LocatorContainer extends Component {
  render() {
    const markers = this.props.storesFound.map((store) => {
      return [parseFloat(store.Latitude), parseFloat(store.Longitude)]
    })

    return (
      <div>
        <MapSearch onSearchPostcode={this.props.actions.fetchStores} />
        <button className="btn btn-secondary btn-block mb-4 hidden-sm-up">View Map</button>
        <Results />
        <MyMap markers={markers} />
      </div>
    );
  }
}

LocatorContainer.propTypes = {
  storesFound: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => {
  return {
    storesFound: state.storesFound
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocatorContainer);
