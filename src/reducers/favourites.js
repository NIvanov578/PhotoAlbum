import { TOGGLE_FAVOURITES } from '../constants';

import { getData } from '../storages/localStorage';

const initState = getData('favourites') || [];

export default function (state = initState, action) {
  switch (action.type) {
    case TOGGLE_FAVOURITES:
      const {
        data: { picture, isFavourite },
      } = action;
      return isFavourite
        ? state.filter((el) => el.id !== picture.id)
        : [...state, { ...picture, isFavourite: true }];
    default:
      return state;
  }
}

export const getNumberOfChange = (state) => state.persistedStore.favourites;
