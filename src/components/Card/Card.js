import React from 'react';
import Photo from '../Photo/Photo';
import './Card.css';

function Card({ title, thumbnailUrl, className, render }) {
  const addedClass = className || '';

  return (
    <section className={`card ${addedClass}`}>
      <div className="cell">
        {thumbnailUrl && <Photo thumbnailUrl={thumbnailUrl} />}
        <h4>{title}</h4>
      </div>
      {render && render()}
    </section>
  );
}

export default Card;
