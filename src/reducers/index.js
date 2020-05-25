import { combineReducers } from 'redux';
import album from './album';
import favourites from './favourites';

const reducers = combineReducers({
  album,
  favourites,
});

export { reducers };
