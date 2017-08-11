import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Results from './Results';
import MapSearch from './MapSearch';
import MyMap from './MyMap';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mapActions from '../actions/map-actions';

class LocatorContainer extends Component {
  render() {
    const {markers} = this.props;

    return (
      <div>
        <MapSearch setMapMarkers={this.props.actions.setMapMarkers} />
        <button className="btn btn-secondary btn-block mb-4 hidden-sm-up">View Map</button>
        <Results />
        <MyMap markers={markers} />
      </div>
    );
  }
}

LocatorContainer.propTypes = {
  markers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => {
  return {
    markers: state.map
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(mapActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocatorContainer);
