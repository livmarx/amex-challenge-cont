import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        {/* <Link to="/" className="logo">
          <img src="open-book2.png" className="bookself-img" />
        </Link> */}
        <ul className="main-footer" id="js-menu">
          <li>
            <a
              href="https://twitter.com/openlibrary?ref_src=twsrc%5Etfw"
              data-related="OpenLibrary"
              data-show-count="false"
              className="nav-links"
            >
              <button type="button" className="myButton">
                Follow @openlibrary
              </button>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/livmarx"
              data-size="large"
              aria-label="Follow @livmarx on GitHub"
              className="nav-links"
            >
              {' '}
              <button type="button" className="myButton">
                Follow @livmarx
              </button>
            </a>
          </li>
          <li>
            <a
              href="https://openlibrary.org/developers/api"
              className="nav-links"
            >
              {' '}
              <button type="button" className="myButton">
                Powered by Open Library
              </button>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
