import React from 'react';
import Card from '../Card/Card';
import PageWrapper from '../PageWrapper/PageWrapper';
import Page from '../Page/Page';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function ({ photos = [], toggleFavourites, message, error }) {
  return (
    <PageWrapper>
      <Page>
        {photos.length > 0 ? (
          photos.map((photo, index) => {
            return (
              <Card
                title={photo.title}
                thumbnailUrl={photo.thumbnailUrl}
                key={`key-${photo.albumId}-${photo.id}`}
                render={
                  toggleFavourites
                    ? () => (
                        <Button
                          label={
                            photo.isFavourite ? 'Remove' : 'Add To Favourites'
                          }
                          handleClick={() =>
                            toggleFavourites(photo, photo.isFavourite)
                          }
                          className="card-button "
                        />
                      )
                    : null
                }
              />
            );
          })
        ) : error ? (
          <ErrorMessage error={error} />
        ) : (
          <h2>{message}</h2>
        )}
      </Page>
    </PageWrapper>
  );
}
