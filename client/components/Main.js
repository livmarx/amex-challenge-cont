import { getBooks, getBooksByAuthor, getBooksByISBN } from '../reducers/books';
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInputTitle: '',
      searchInputAuthor: '',
      searchInputISBN: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitTitle = this.onSubmitTitle.bind(this);
    this.onSubmitAuthor = this.onSubmitAuthor.bind(this);
    this.onSubmitISBN = this.onSubmitISBN.bind(this);
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
    } else if (eventTarget === 'isbn') {
      this.setState({ searchInputISBN: event.target.value });
      console.log('this.state.searchInputISBN:', this.state.searchInputISBN);
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
  onSubmitISBN() {
    console.log('on submit:', this.state.searchInputISBN);
    this.props.fetchBooksByISBN(this.state.searchInputISBN);
  }

  render() {
    return (
      <div>
        <div id="welcome">
          <h1>Book Search:</h1>
          <br />
          <div>
            Search by title:{'  '}
            <input type="text" name="title" onChange={this.handleChange} />
            <input type="submit" value="Search" onClick={this.onSubmitTitle} />
          </div>
          <h3> or </h3>
          <div>
            Search by author:{'  '}
            <input type="text" name="author" onChange={this.handleChange} />
            <input type="submit" value="Search" onClick={this.onSubmitAuthor} />
          </div>
          <h3> or </h3>
          <div>
            Search by ISBN:{'  '}
            <input type="text" name="isbn" onChange={this.handleChange} />
            <input type="submit" value="Search" onClick={this.onSubmitISBN} />
          </div>
        </div>
        <ul id="book-list">
          {this.props.books ? (
            this.props.books.map((book, i) => (
              <div key={i}>
                <li>
                  <Link to={`/${book.id_depósito_legal}`}>
                    <h3>Title: {book.title}</h3>
                  </Link>
                  <br />
                  <h3>Author: {book.author_name}</h3>
                  <button
                    type="button"
                    id={`${book.isbn}`}
                    onClick={this.handleClick}
                  >
                    X
                  </button>
                </li>
              </div>
            ))
          ) : (
            <div>
              <h1>NOPE!</h1>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

// connect component to redux store:

const mapStateToProps = state => {
  return { books: state.books };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: searchInputTitle => dispatch(getBooks(searchInputTitle)),
    fetchBooksByAuthor: searchInputAuthor =>
      dispatch(getBooksByAuthor(searchInputAuthor)),
    fetchBooksByISBN: searchInputISBN =>
      dispatch(getBooksByISBN(searchInputISBN)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
