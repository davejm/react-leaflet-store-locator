import * as types from '../actions/action-types';

export default (state = [[51.505, -0.09]], action) => {
  switch (action.type) {
    case types.SET_MAP_MARKERS:
      return action.markers;
    default:
      return state;
  }
};