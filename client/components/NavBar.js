import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <nav id="nav">
        <div id="na-logo">
          <Link to="/" className="single-link">
            <img src="bookshelf.png" height="100" />
          </Link>
        </div>
        <div id="nav-links">
          <Link to="/" className="single-link">
            Home
          </Link>
          <Link to="/wideSearch" className="single-link">
            Wide Search
          </Link>
          <Link to="/idSearch" className="single-link">
            Specific Search
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
