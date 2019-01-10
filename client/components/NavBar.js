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
            <button type="button" className="myButton">
              Home
            </button>
          </Link>
          <Link to="/general-search" className="single-link">
            <button type="button" className="myButton">
              General Search
            </button>
          </Link>
          <Link to="/advanced-search" className="single-link">
            <button type="button" className="myButton">
              Advanced Search
            </button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
