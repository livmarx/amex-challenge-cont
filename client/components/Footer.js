import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <nav id="nav">
        <div id="na-logo">
          <Link to="/" className="single-link">
            <img src="bookshelf.png" height="100" />
          </Link>
        </div>
        <div id="nav-links">
          <a href="https://twitter.com/OpenLibrary">
            <p>Follow us: </p>
            <img
              src="https://www.clipartmax.com/png/small/15-154782_clipart-bird-transparent-background-cliparts-free-download-twitter-logo.png"
              height="50"
            />
          </a>
          <a href="https://openlibrary.org/developers/api">
            <p>API Doc: </p>
            <img
              src="http://www.soidergi.com/wp-content/uploads/co/thumb-computer-vector-icon-isolated-on-transparent-background-computer-logo-concept-image.jpg"
              height="50"
            />
          </a>
        </div>
      </nav>
    );
  }
}

export default Footer;
