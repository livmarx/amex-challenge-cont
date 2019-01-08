import { getBooks, getBooksByAuthor, getBooksByISBN } from '../reducers/books';
import { connect } from 'react-redux';
import React from 'react';
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
      searchInputIdNumber: '',
      sortSelection: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.onSubmitTitle = this.onSubmitTitle.bind(this);
    this.onSubmitAuthor = this.onSubmitAuthor.bind(this);
    this.onSubmitIdNumber = this.onSubmitIdNumber.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const eventTarget = event.target.name;
    console.log('event.target.value:', event.target.value);
    if (eventTarget === 'title') {
      this.setState({ searchInputTitle: event.target.value });
      console.log('this.state.searchInputTitle:', this.state.searchInputTitle);
    } else if (eventTarget === 'author') {
      this.setState({ searchInputAuthor: event.target.value });
      console.log(
        'this.state.searchInputAuthor:',
        this.state.searchInputAuthor
      );
    } else {
      this.setState({ searchInputIdNumber: event.target.value });
      console.log(
        'this.state.searchInputIdNumber:',
        this.state.searchInputIdNumber
      );
    }
  }

  onSubmitTitle() {
    console.log('on submit:', this.state.searchInputTitle);
    this.props.fetchBooks(this.state.searchInputTitle);
  }

  onSubmitAuthor() {
    console.log('on submit:', this.state.searchInputAuthor);
    this.props.fetchBooksByAuthor(this.state.searchInputAuthor);
  }
  onSubmitIdNumber(event) {
    console.log('on submit:', this.state.searchInputIdNumber);
    console.log('event.target.name:', event.target.name);
    this.props.fetchBooksByISBN(
      event.target.name,
      this.state.searchInputIdNumber
    );
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
    const book = this.props.book;
    return (
      <div>
        <div id="search-bars">
          <div id="general-search">
            <div className="input-feild">
              Search by title:{'  '}
              <input type="text" name="title" onChange={this.handleChange} />
              <input
                type="submit"
                value="Search"
                onClick={this.onSubmitTitle}
              />
            </div>
            <div className="input-feild">
              Search by author:{'  '}
              <input type="text" name="author" onChange={this.handleChange} />
              <input
                type="submit"
                value="Search"
                onClick={this.onSubmitAuthor}
              />
            </div>
          </div>
          <div id="id-search">
            <div className="input-feild">
              Search by ISBN:{'  '}
              <input type="text" name="ISBN" onChange={this.handleChange} />
              <input
                type="submit"
                value="Search"
                name="ISBN"
                onClick={this.onSubmitIdNumber}
              />
            </div>
            <div className="input-feild">
              Search by OCLC:{'  '}
              <input type="text" name="OCLC" onChange={this.handleChange} />
              <input type="submit" value="Search" onClick={this.onSubmitISBN} />
            </div>
            <div className="input-feild">
              Search by LCCN:{'  '}
              <input type="text" name="LCCN" onChange={this.handleChange} />
              <input
                type="submit"
                value="Search"
                onClick={this.onSubmitIdNumber}
              />
            </div>
            <div className="input-feild">
              Search by OLID:{'  '}
              <input type="text" name="OLID" onChange={this.handleChange} />
              <input
                type="submit"
                value="Search"
                onClick={this.onSubmitIdNumber}
              />
            </div>
          </div>
        </div>
        <div className="dd-menu">
          <br />
          Sort By:{' '}
          <select id="dropdown" onChange={this.handleSelect}>
            <option value="Title: a-z">Title: a-z</option>
            <option value="Author: a-z">Author: a-z</option>
          </select>
        </div>

        <div id="book-by-title-author">
          {books ? (
            books
              .filter(book => book.isbn)
              .map((book, i) => (
                <div className="book-card" key={i}>
                  {console.log('book.isbn', book.isbn)}
                  {console.log(
                    'Array.isArray(book.isbn)',
                    Array.isArray(book.isbn)
                  )}
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
        <div id="book-by-id">
          {book ? (
            <div className="book-card">
              <a href={book.url}>
                <h3> {book.title}</h3>
                <h4>{book.subtitle}</h4>
                <h5>Written by {book.authors[0].name}</h5>

                {book.cover ? (
                  <img src={book.cover.large} />
                ) : (
                  <img src="https://www.globalenergy.com.sa/wp-content/uploads/2015/11/sempreview.jpg" />
                )}
              </a>
            </div>
          ) : (
            <div />
          )}
        </div>
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
