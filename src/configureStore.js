import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducers } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { localStorageMiddleware } from './middlwares';

export const configureStore = (preloadedState) =>
  createStore(
    reducers,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware, localStorageMiddleware)
    )
  );
