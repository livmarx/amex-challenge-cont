import { getBooksByISBN } from '../reducers/books';
import { connect } from 'react-redux';
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

class SearchBarsId extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInputIdNumber: '',
      sortSelection: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitIdNumber = this.onSubmitIdNumber.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const eventTarget = event.target.name;
    this.setState({ searchInputIdNumber: event.target.value });
    console.log(
      'this.state.searchInputIdNumber:',
      this.state.searchInputIdNumber
    );
  }

  onSubmitIdNumber(event) {
    console.log('on submit:', this.state.searchInputIdNumber);
    console.log('event.target.name:', event.target.name);
    this.props.fetchBooksByISBN(
      event.target.name,
      this.state.searchInputIdNumber
    );
  }

  render() {
    const book = this.props.book;
    return (
      <div>
        <NavBar />
        <div id="search-bars">
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
          </div>
          <div id="id-search">
            <div className="input-feild">
              Search by OCLC:{'  '}
              <input type="text" name="OCLC" onChange={this.handleChange} />
              <input type="submit" value="Search" onClick={this.onSubmitISBN} />
            </div>
          </div>
          <div id="id-search">
            <div className="input-feild">
              Search by LCCN:{'  '}
              <input type="text" name="LCCN" onChange={this.handleChange} />
              <input
                type="submit"
                value="Search"
                onClick={this.onSubmitIdNumber}
              />
            </div>
          </div>
          <div id="id-search">
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
        <Footer />
      </div>
    );
  }
}

// connect component to redux store:

const mapStateToProps = state => {
  return { book: state.book };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooksByISBN: (idType, searchInputIdNumber) =>
      dispatch(getBooksByISBN(idType, searchInputIdNumber)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBarsId);
