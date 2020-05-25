import {
  GET_ALBUMS,
  GET_ALBUMS_START,
  GET_ALBUMS_ERROR,
  TOGGLE_FAVOURITES,
} from '../constants';

const defaultState = {
  isLoading: false,
  error: '',
  albumMap: {},
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        isLoading: false,
        error: '',
        albumMap: action.data,
      };
    case GET_ALBUMS_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case GET_ALBUMS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error.message,
      };

    case TOGGLE_FAVOURITES: {
      const {
        data: {
          picture: { albumId, id },
          isFavourite,
        },
      } = action;
      const photos = state.albumMap[albumId];
      return {
        ...state,
        isLoading: false,
        error: '',
        albumMap: {
          ...state.albumMap,
          [albumId]: photos.map((el) =>
            el.id === id ? { ...el, isFavourite: !isFavourite } : el
          ),
        },
      };
    }
    default:
      return state;
  }
}
