import * as types from './action-types';

export const setMapMarkers = (markers) => {
  return {
    type: types.SET_MAP_MARKERS,
    markers
  };
}
