import rootReducer from '../reducers';
import {createStore, compose} from 'redux';

// enable redux devtools
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default (initialState) => {
  return createStore(rootReducer, initialState, enhancers);
};
