import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="logo">
          <Link to="/" className="single-link">
            <img
              src="https://unixtitan.net/images/book-clipart-5.png"
              className="bookself-img"
            />
          </Link>
        </div>
        <a
          href="https://twitter.com/openlibrary?ref_src=twsrc%5Etfw"
          data-related="OpenLibrary"
          data-show-count="false"
        >
          <p>Follow @openlibrary</p>
        </a>

        <a
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
