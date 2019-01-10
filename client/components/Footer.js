import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div id="na-logo">
          <Link to="/" className="single-link">
            <img src="bookshelf.png" height="100" className="bookself-img" />
          </Link>
        </div>
        {/* <div id="nav-links"> */}
        <a
          href="https://twitter.com/openlibrary?ref_src=twsrc%5Etfw"
          class="twitter-follow-button"
          data-related="OpenLibrary"
          data-show-count="false"
        >
          <p>Follow @openlibrary</p>
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        />
        <a
          class="github-button"
          href="https://github.com/livmarx"
          data-size="large"
          aria-label="Follow @livmarx on GitHub"
        >
          <p>Follow @livmarx</p>
        </a>
        <a href="https://openlibrary.org/developers/api">
          <p>Powered by Open Library</p>
        </a>
        {/* </div> */}
      </div>
    );
  }
}

export default Footer;
