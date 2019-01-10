import { getBooksByISBN } from '../reducers/books';
import { connect } from 'react-redux';
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

class SearchBarsId extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInputISBN: '',
      searchInputOCLC: '',
      searchInputOLID: '',
      searchInputLCCN: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitISBN = this.onSubmitISBN.bind(this);
    this.onSubmitOCLC = this.onSubmitOCLC.bind(this);
    this.onSubmitOLID = this.onSubmitOLID.bind(this);
    this.onSubmitLCCN = this.onSubmitLCCN.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'ISBN') {
      this.setState({ searchInputISBN: event.target.value });
    } else if (event.target.name === 'OCLC') {
      this.setState({ searchInputOCLC: event.target.value });
    } else if (event.target.name === 'OLID') {
      this.setState({ searchInputOLID: event.target.value });
    } else if (event.target.name === 'LCCN') {
      this.setState({ searchInputLCCN: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  onSubmitISBN(event) {
    this.props.fetchBooksByISBN(event.target.name, this.state.searchInputISBN);
    this.setState({ searchInputISBN: '' });
  }

  onSubmitOCLC(event) {
    this.props.fetchBooksByISBN(event.target.name, this.state.searchInputOCLC);
    this.setState({ searchInputOCLC: '' });
  }

  onSubmitOLID(event) {
    this.props.fetchBooksByISBN(event.target.name, this.state.searchInputOLID);
    this.setState({ searchInputOLID: '' });
  }

  onSubmitLCCN(event) {
    this.props.fetchBooksByISBN(event.target.name, this.state.searchInputLCCN);
    this.setState({ searchInputLCCN: '' });
  }

  render() {
    const book = this.props.book;
    return (
      <div>
        <NavBar />
        <h1>Advanced Seach</h1>
        <p className="search-body">
          At bÜkshelph, we support searches with ISBN, OCLC, OLID, and LCCN.
          This is recomended for finding particular versions of historical texts
          or translated works.
        </p>
        <br />
        <div className="search-bars">
          <div id="id-search">
            <div className="input-feild">
              <form onSubmit={this.handleSubmit}>
                Search by ISBN:{'  '}
                <input
                  type="text"
                  name="ISBN"
                  value={this.state.searchInputISBN}
                  onChange={this.handleChange}
                />{' '}
                <button
                  type="submit"
                  value="Search"
                  name="ISBN"
                  className="myButton"
                  onClick={this.onSubmitISBN}
                >
                  Seach
                </button>
              </form>
            </div>
          </div>
          <div id="id-search">
            <div className="input-feild">
              <form>
                Search by OCLC:{'  '}
                <input
                  type="text"
                  name="OCLC"
                  value={this.state.searchInputOCLC}
                  onChange={this.handleChange}
                />
                {'  '}
                <button
                  type="submit"
                  value="Search"
                  className="myButton"
                  onClick={this.onSubmitOCLC}
                >
                  Seach
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="search-bars">
          <div id="id-search">
            <div className="input-feild">
              <form>
                Search by LCCN:{'  '}
                <input
                  type="text"
                  name="LCCN"
                  value={this.state.searchInputLCCN}
                  onChange={this.handleChange}
                />{' '}
                {'  '}
                <button
                  type="submit"
                  value="Search"
                  className="myButton"
                  onClick={this.onSubmitLCCN}
                >
                  Seach
                </button>
              </form>
            </div>
          </div>
          <div id="id-search">
            <div className="input-feild">
              <form>
                Search by OLID:{'  '}
                <input
                  type="text"
                  name="OLID"
                  value={this.state.searchInputOLID}
                  onChange={this.handleChange}
                />{' '}
                {'  '}
                <button
                  type="submit"
                  value="Search"
                  className="myButton"
                  onClick={this.onSubmitOLID}
                >
                  Seach
                </button>
              </form>
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
