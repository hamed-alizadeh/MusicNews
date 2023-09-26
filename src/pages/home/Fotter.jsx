import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="https://www.facebook.com">Facebook</a>
        <a href="https://www.twitter.com">Twitter</a>
        <a href="https://www.youtube.com">YouTube</a>
        <a href="https://www.instagram.com">Instagram</a>
      </div>
      <div className="footer__sections">
        <div className="footer__section">
          <h4>About</h4>
          <a href="/about-sky-news">About SoundScoop News</a>
          <a href="/about-us">About Us</a>
          <a href="/sky-news-international">SoundScoop News International</a>
          {/* Add more About links as needed */}
        </div>
        <div className="footer__section">
          <h4>Services</h4>
          <a href="/library-sales">SoundScoop News Library Sales</a>
          <a href="/site-map">Site Map</a>
          {/* Add more Services links as needed */}
        </div>
        <div className="footer__section">
          <h4>Editorial</h4>
          <a href="/editorial-guidelines">Editorial Guidelines</a>
          <a href="/board">SoundScoop News Board</a>
          {/* Add more Editorial links as needed */}
        </div>
        {/* Add more sections as needed */}
      </div>
      <div className="footer__copyright">
        <p>© 2023 SoundScoop News</p>
      </div>
    </footer>
  );
}

export default Footer;
