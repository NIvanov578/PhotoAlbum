import React from 'react';
import './Photo.css';

function Photo({ thumbnailUrl }) {
  return (
    <>
      <img
        className="photo"
        src={thumbnailUrl}
        alt={thumbnailUrl}
        width="150"
        height="150"
      />
    </>
  );
}

export default Photo;
