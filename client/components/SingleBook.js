import { getBooksByISBN } from '../reducers/books';
import { connect } from 'react-redux';
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

class SingleBook extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      author: '',
      description: '',
      cover: '',
    };
  }

  async componentDidMount() {
    const isbnFromUrl = this.props.match.params.isbn;
    await this.props.fetchBooksByISBN('ISBN', isbnFromUrl);
    this.setState({
      title: this.props.book.title,
      subtitle: this.props.bookDetails.details.subtitle,
      author: this.props.book.authors[0].name,
      description: this.props.bookDetails.details.description,
      cover:
        'https://www.globalenergy.com.sa/wp-content/uploads/2015/11/sempreview.jpg',
      url: this.props.book.url,
    });
  }

  render() {
    const book = this.props.book;
    return (
      <div>
        <NavBar />
        {book ? (
          <div>
            <h1> {this.state.title}</h1>
            <h3>{this.state.subtitle}</h3>
            <h3>Written by {this.state.author}</h3>
            <h3>{this.state.subtitle}</h3>
            <a href={this.state.url}>
              <button type="button" className="myButton">
                More details
              </button>
              <p>{this.state.description}</p>
            </a>
            {this.props.book.cover ? (
              <img
                src={this.props.book.cover.large}
                className="single-book-img"
              />
            ) : (
              <img src={this.state.cover} className="single-book-img" />
            )}
          </div>
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}

        <Footer />
      </div>
    );
  }
}

// connect component to redux store:

const mapStateToProps = state => {
  return {
    book: state.bookData,
    bookDetails: state.bookDetails,
    searchInput: state.searchInput,
  };
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
)(SingleBook);
