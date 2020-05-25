import { TOGGLE_FAVOURITES } from '../constants';

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    if (action.type === TOGGLE_FAVOURITES) {
      localStorage.setItem(
        'favourites',
        JSON.stringify([...getState().favourites])
      );
    }

    return result;
  };
};

export { localStorageMiddleware };
