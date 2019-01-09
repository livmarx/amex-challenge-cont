import { getBooks, getBooksByAuthor, getBooksByISBN } from '../reducers/books';
import { connect } from 'react-redux';
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

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
    event.preventDefault();
    const eventTarget = event.target.name;
    if (eventTarget === 'title') {
      this.setState({ searchInputTitle: event.target.value });
    } else if (eventTarget === 'author') {
      this.setState({ searchInputAuthor: event.target.value });
    }
  }

  onSubmitTitle(e) {
    e.preventDefault();
    console.log('on submit:', this.state.searchInputTitle);
    this.props.fetchBooks(this.state.searchInputTitle);
    this.setState({ searchInputAuthor: '' });
    console.log('searchInputAuthor:', this.state.searchInputAuthor);
  }

  onSubmitAuthor(e) {
    e.preventDefault();
    console.log('on submit:', this.state.searchInputAuthor);
    this.props.fetchBooksByAuthor(this.state.searchInputAuthor);
    this.setState({ searchInputTitle: '' });
    console.log('searchInputTitle:', this.state.searchInputTitle);
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
        <div id="search-bars">
          <div id="general-search">
            <div className="input-feild">
              <form>
                Search by title:{'  '}
                <input type="text" name="title" onChange={this.handleChange} />
                <button
                  type="submit"
                  value="Search"
                  onClick={this.onSubmitTitle}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <div id="general-search">
            <div className="input-feild">
              <form>
                Search by author:{'  '}
                <input type="text" name="author" onChange={this.handleChange} />
                <button
                  type="submit"
                  value="Search"
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
          <select id="dropdown" onChange={this.handleSelect}>
            <option value="Author: a-z ">Author: a-z </option>
            <option value="Title: a-z">Title: a-z</option>
          </select>
        </div>

        <div id="book-by-title-author">
          {books ? (
            books
              .filter(book => book.isbn)
              .map((book, i) => (
                <div className="book-card" key={i}>
                  <a href={`https://openlibrary.org/${book.seed[0]}/`}>
                    <h3>{book.title}</h3>
                  </a>
                  <br />
                  <h4>Written by {book.author_name}</h4>
                </div>
              ))
          ) : (
            <div />
          )}
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
