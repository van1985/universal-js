import { combineReducers, createStore } from 'redux';
import { updateUrl, urlReducer } from 'universal-redux-router';

import DevTools from '../containers/DevTools';

import * as reducers from '../reducers';

const reducer = combineReducers({ ...reducers, url: urlReducer });

const configureStore = ( initialState = {}, initialUrl = null ) => {
  if ( initialUrl ) {
    initialState = {
      ...initialState,
      url: urlReducer( null, updateUrl( initialUrl )),
    };
  }

  if ( __DEVELOPMENT__ ) {
    return DevTools.instrument()( createStore )( reducer, initialState );
  } else {
    return createStore( reducer, initialState );
  }
};

export default configureStore;