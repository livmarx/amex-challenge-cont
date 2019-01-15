import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
    });
  }

  render() {
    return (
      <nav className="navbar">
        <span
          className="navbar-toggle"
          id="js-navbar-toggle"
          onClick={this.toggleMenu}
        >
          <i className="fas fa-bars" />
        </span>
        {/* <Link to="/" className="logo">
          <img
            src="open-book2.png"
            alt="open book image"
            className="bookself-img"
          />
        </Link> */}
        <ul className="main-nav" id="js-menu">
          <li>
            <Link to="/" className="nav-links">
              <button type="button" className="myButton">
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/general-search" className="nav-links">
              <button type="button" className="myButton">
                General Search
              </button>
            </Link>
          </li>
          <li>
            <Link to="/advanced-search" className="nav-links">
              <button type="button" className="myButton">
                Advanced Search
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
