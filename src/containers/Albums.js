import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAlbums, toggleFavourites } from '../actions';
import AlbumPhotos from '../components/AlbumPhotos/AlbumPhotos';
import AlbumList from '../components/AlbumList/AlbumList';
import Path from '../components/Path/Path';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import Spinner from '../components/Spinner/Spinner';

class Albums extends Component {
  constructor() {
    super();
    this.toggleFavourites = this.toggleFavourites.bind(this);
  }

  componentDidMount() {
    this.props.getAlbums();
  }

  toggleFavourites(el, isFavourite) {
    this.props.toggleFavourites(el, isFavourite);
  }

  render() {
    const {
      album: { error, isLoading, albumMap },
      match,
      location: { pathname },
    } = this.props;
    const albumIds = Object.keys(albumMap);

    return (
      <>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Route
              exact
              path={`${match.url}`}
              render={() => (
                <AlbumList
                  albumIds={albumIds}
                  pathname={pathname}
                  error={error}
                />
              )}
            />
            <Route
              exact
              path={`${match.url}/:albumId`}
              render={() => (
                <Path
                  render={({ albumId }) => (
                    <AlbumPhotos
                      photos={albumMap[albumId]}
                      toggleFavourites={this.toggleFavourites}
                      message="Sorry. Photo doesn't exist!"
                      error={error}
                    />
                  )}
                />
              )}
            />
            <Route path={`${match.url}/:albumId/*`}>
              <Redirect
                to={{
                  pathname: '/*',
                }}
              />
            </Route>
          </>
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  const { album } = state;
  return {
    album,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAlbums: () => dispatch(getAlbums()),
    toggleFavourites: (photo, isFavourite) =>
      dispatch(toggleFavourites(photo, isFavourite)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Albums));
