import { getBooks, getBooksByAuthor, getBooksByISBN } from '../reducers/books';
import { connect } from 'react-redux';
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const sortByTitle = function(a, b) {
  const titleA = a.title.toLowerCase(),
    titleB = b.title.toLowerCase();
  if (titleA < titleB) return -1;
  if (titleA > titleB) return 1;
  return 0;
};

const sortByAuthor = function(a, b) {
  if (a.author_name && b.author_name) {
    const nameA = a.author_name[0].toLowerCase(),
      nameB = b.author_name[0].toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  }
};

class SearchBars extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInputTitle: '',
      searchInputAuthor: '',
      sortSelection: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.onSubmitTitle = this.onSubmitTitle.bind(this);
    this.onSubmitAuthor = this.onSubmitAuthor.bind(this);
  }

  handleChange(event) {
    const eventTarget = event.target.name;
    if (eventTarget === 'title') {
      this.setState({ searchInputTitle: event.target.value });
    } else if (eventTarget === 'author') {
      this.setState({ searchInputAuthor: event.target.value });
    }
  }

  onSubmitTitle(e) {
    e.preventDefault();
    this.props.fetchBooks(this.state.searchInputTitle);
    this.setState({ searchInputTitle: '', searchInputAuthor: '' });
  }

  onSubmitAuthor(e) {
    e.preventDefault();
    this.props.fetchBooksByAuthor(this.state.searchInputAuthor);
    this.setState({ searchInputTitle: '', searchInputAuthor: '' });
  }

  handleSelect(event) {
    this.setState({ sortSelection: event.target.value });
  }

  render() {
    const books =
      this.props.books &&
      this.props.books.sort(
        this.state.sortSelection === 'Title: a-z' ? sortByTitle : sortByAuthor
      );

    return (
      <div>
        <NavBar />

        <h1>General Seach</h1>
        <div className="search-body">
          <p>
            Here, users can search for books based on title or author last name.
            Use this search to find all your options!
          </p>
          <br />
        </div>
        <div className="search-bars">
          <div className="general-search">
            <div className="input-feild">
              <form>
                Search by title:{'  '}
                <input
                  type="text"
                  name="title"
                  value={this.state.searchInputTitle}
                  onChange={this.handleChange}
                />{' '}
                <button
                  type="submit"
                  value="Search"
                  className="myButton"
                  onClick={this.onSubmitTitle}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="general-search">
            <div className="input-feild">
              <form>
                Search by author:{'  '}
                <input
                  type="text"
                  name="author"
                  value={this.state.searchInputAuthor}
                  onChange={this.handleChange}
                />{' '}
                <button
                  type="submit"
                  value="Search"
                  className="myButton"
                  onClick={this.onSubmitAuthor}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="dd-menu">
          <br />
          Sort By:{' '}
          <select className="dropdown" onChange={this.handleSelect}>
            <option value="Author: a-z ">Author: a-z</option>
            <option value="Title: a-z">Title: a-z</option>
          </select>
        </div>

        <div className="container">
          <div className="row justify-content-between">
            {books ? (
              books
                .filter(book => book.isbn)
                .map((book, i) => (
                  <div
                    key={i}
                    className="col-lg-3 col-md-3 col-sm-6 col-xs-12"
                    className="book-card"
                  >
                    <br />
                    <Link to={`/${book.isbn[0]}`} className="search-links">
                      <h3>{book.title}</h3>
                      <br />
                      <h6>Written by {book.author_name}</h6>
                    </Link>
                    <br />
                    <br />
                  </div>
                ))
            ) : (
              <div />
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

// connect component to redux store:

const mapStateToProps = state => {
  return { books: state.books, book: state.book };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: searchInputTitle => dispatch(getBooks(searchInputTitle)),
    fetchBooksByAuthor: searchInputAuthor =>
      dispatch(getBooksByAuthor(searchInputAuthor)),
    fetchBooksByISBN: (idType, searchInputIdNumber) =>
      dispatch(getBooksByISBN(idType, searchInputIdNumber)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBars);
