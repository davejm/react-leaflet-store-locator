import * as types from './action-types';
import fetch from 'isomorphic-fetch'

export const requestStores = (postcode) => {
  return {
    type: types.REQUEST_STORES,
    postcode
  };
}

export const receiveStores = (postcode, json) => {
  return {
    type: types.RECEIVE_STORES,
    postcode,
    stores: json.Stores.StoreDetailsV2Entry,
    receivedAt: Date.now()
  };
}


// Async actions

export function fetchStores(postcode) {
  return (dispatch) => {
    dispatch(requestStores(postcode));

    const baseURL = (window.location.hostname === 'localhost') ?
      'http://localhost:3000':
      'https://lab.davidmoodie.com/react-leaflet-store-locator';

    const dataPath = 'data/stores-sky2.json';
    const dataURL = `${baseURL}/${dataPath}`;

    return fetch(dataURL)
      .then(response => response.json())
      .then(json => dispatch(receiveStores(postcode, json)))
  }
}
