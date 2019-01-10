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
        <div className="nav-links">
          <a
            href="https://twitter.com/openlibrary?ref_src=twsrc%5Etfw"
            data-related="OpenLibrary"
            data-show-count="false"
            className="single-link"
          >
            <button type="button" className="myButton">
              <p>Follow @openlibrary</p>
            </button>
          </a>

          <a
            href="https://github.com/livmarx"
            data-size="large"
            aria-label="Follow @livmarx on GitHub"
            className="single-link"
          >
            {' '}
            <button type="button" className="myButton">
              <p>Follow @livmarx</p>
            </button>
          </a>
          <a
            href="https://openlibrary.org/developers/api"
            className="single-link"
          >
            {' '}
            <button type="button" className="myButton">
              <p>Powered by Open Library</p>
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
