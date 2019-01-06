import { getBooks } from '../reducers/books';
import { connect } from 'react-redux';
import React from 'react';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const eventTarget = event.target.name;
    console.log('event.target.value:', event.target.value);
    if (eventTarget === 'title') {
      this.setState({ searchInput: event.target.value });
    }
    console.log('this.state.searchInput:', this.state.searchInput);
  }

  onSubmit() {
    console.log('on submit:', this.state.searchInput);
    this.props.actions.fetchBooks(this.state.searchInput);
  }

  render() {
    const books = this.props.books;
    // console.log('books[0]:', books[0]);

    // console.log('books[0].title:', books[0].title_suggest);
    return (
      <div>
        <div id="welcome">
          <h1>Search for a book here:</h1>
          <br />
          <div>
            Title:{'  '}
            <input type="text" name="title" onChange={this.handleChange} />
            <input type="submit" value="Search" onClick={this.onSubmit} />
          </div>
        </div>
        <ul id="book-list">
          {books ? (
            books.map(
              book => (
                console.log('this.props.books:', this.props.books),
                (
                  <div key={book.isbn}>
                    <li>
                      {/* <Link to={`/campuses/${book.isbn}`}> */}
                      <h3>
                        Book: {book.title}
                        <br />
                        Author: {book.author_name}
                      </h3>
                      {/* </Link> */}
                      <button
                        type="button"
                        id={`${book.isbn}`}
                        onClick={this.handleClick}
                      >
                        X
                      </button>
                    </li>
                  </div>
                )
              )
            )
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
const mapDispatchToProps = dispatch => {
  return {
    actions: {
      fetchBooks: searchInput => dispatch(getBooks(searchInput)),
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Main);
