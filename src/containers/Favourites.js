import React, { Component } from 'react';
import { connect } from 'react-redux';
import AlbumPhotos from '../components/AlbumPhotos/AlbumPhotos';

class Favourites extends Component {
  render() {
    const { favourites, error } = this.props;
    return (
      <>
        <AlbumPhotos
          photos={favourites}
          message="Sorry. You don't have any favourites photos!"
          error={error}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  const { favourites } = state;

  return {
    favourites,
  };
}

export default connect(mapStateToProps, null)(Favourites);
