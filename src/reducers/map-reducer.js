import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.SEARCH_STORES_BY_POSTCODE:
      // const postcode = action.postcode;
      const markers = [[51.515, -0.092], [51.512, -0.0925]]; //test
      return markers;
    default:
      return state;
  }
};
