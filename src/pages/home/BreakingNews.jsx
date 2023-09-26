import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function BreakingNews() {
  return (
    <Link to="/news-article" className="breaking-news">
      <div className="breaking-news__video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Breaking News Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="breaking-news__content">
        <h2 className="breaking-news__title">Breaking News Title</h2>
        <p className="breaking-news__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to="/news-article" className="breaking-news__link">
          Read More
        </Link>
      </div>
    </Link>
  );
}

export default BreakingNews;
