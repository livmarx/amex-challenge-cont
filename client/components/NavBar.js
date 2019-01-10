import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="logo">
          <Link to="/" className="single-link">
            <img
              src="https://unixtitan.net/images/book-clipart-5.png"
              className="bookself-img"
            />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="single-link">
            Home
          </Link>
          <Link to="/wideSearch" className="single-link">
            General Search
          </Link>
          <Link to="/idSearch" className="single-link">
            Advanced Search
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
