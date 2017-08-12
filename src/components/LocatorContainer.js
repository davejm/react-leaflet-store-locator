import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Results from './Results';
import MapSearch from './MapSearch';
import MyMap from './MyMap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

function formatStoreType(type) {
  switch (type) {
    case 'DestinationStore':
      return 'Destination Store';
    case 'LocalSkyStore':
      return 'Local Sky Store';
    default:
      // return a sane default if the type isn't recognised
      return 'Local Sky Store';
  }
}

class LocatorContainer extends Component {
  render() {
    const markers = this.props.storesFound.map((store) => {
      return [store.latitude, store.longitude]
    })

    const resultInfos = this.props.storesFound.map((store) => {
      return Object.assign({}, store, {
        _typeFormatted: formatStoreType(store.type)
      })
    })

    console.log("resultInfos", resultInfos)

    return (
      <div>
        <MapSearch onSearchPostcode={this.props.actions.fetchStores} />
        <button className="btn btn-secondary btn-block mb-4 hidden-sm-up">View Map</button>
        {resultInfos.length > 0 ? <Results resultInfos={resultInfos} /> : 'No results'}
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
