import {
  GET_ALBUMS,
  GET_ALBUMS_START,
  GET_ALBUMS_ERROR,
  TOGGLE_FAVOURITES,
} from '../constants';
import { groupBy } from '../util';

function getAlbums() {
  return (dispatch, getState) => {
    const { favourites } = getState();
    dispatch(onSuccess(GET_ALBUMS_START));
    return fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => {
        dispatch(
          onSuccess(GET_ALBUMS, transformData(data, favourites), 'albumId')
        );
      })
      .catch((error) => dispatch(onError(GET_ALBUMS_ERROR, error)));
  };
}

function transformData(data, favourites) {
  const extendedData = data.map((el) => ({ ...el, isFavourite: false }));
  const groupByAlbumId = groupBy(extendedData, 'albumId');

  for (let favourite of favourites) {
    groupByAlbumId[favourite.albumId] = groupByAlbumId[
      favourite.albumId
    ].map((el) => (el.id === favourite.id ? favourite : el));
  }
  return groupByAlbumId;
}

function toggleFavourites(picture, isFavourite) {
  return (dispatch) =>
    dispatch(onSuccess(TOGGLE_FAVOURITES, { picture, isFavourite }));
}

function onSuccess(type, data) {
  return {
    type,
    data,
  };
}

function onError(type, error) {
  return {
    type,
    error,
  };
}

export { getAlbums, toggleFavourites };
