import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.SET_MAP_MARKERS:
      return action.markers;
    default:
      return state;
  }
};
