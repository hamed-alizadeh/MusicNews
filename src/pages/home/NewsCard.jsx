import React from 'react';

function NewsCard({ imageUrl, title, description }) {
  return (
    <div className="news-card">
      <div className="news-card__image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="news-card__content">
        <h2 className="news-card__title">{title}</h2>
        <p className="news-card__description">{description}</p>
        <button className="news-card__button">More</button>
      </div>
    </div>
  );
}

export default NewsCard;
