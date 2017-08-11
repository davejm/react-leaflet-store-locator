import * as types from './action-types';
// import rp from 'request-promise';

export const searchStoresByPostcode = (postcode) => { 
  return {
    type: types.SEARCH_STORES_BY_POSTCODE,
    postcode
  };
}

// export const setMapMarkers = (markers) => {
//   if (window.location.hostname === 'localhost') {
//     const baseURL = 'http://localhost:3000'
//   } else {
//     const baseURL = 'https://davidmoodie.com/react-leaflet-store-locator'
//   }
//   const dataPath = 'data/stores-sky2.json';
//   const options = {
//     uri: `${homepage}/${dataPath}`,
//     json: true // Automatically parses the JSON string in the response
//   };
//
//   rp(options)
//     .then(function (res) {
//       console.log(res);
//
//       return {
//         type: types.SET_MAP_MARKERS,
//         markers
//       };
//     })
//     .catch(function (err) {
//       // API call failed...
//       console.err("Error getting stores", err);
//     });
// }
