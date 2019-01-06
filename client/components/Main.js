import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
    // this.redirect = this.redirect.bind();
  }

  async componentDidMount() {
    const res = await axios.get(
      'http://openlibrary.org/api/volumes/brief/json/1'
    );
    console.log('res: ', res);
    const allBooks = res.data;
    console.log('allBooks: ', allBooks);
    this.setState({ books: allBooks });
  }

  // redirect(url) {
  //   console.log('url: ', url);
  //   window.location.replace(url);
  //   window.location.href = url;
  //   return false;
  // }

  render() {
    const books = this.state.books || [];
    console.log('all books: ', books);

    return (
      <div className="main">
        <div className="header">
          <h4>Books!</h4>
          <h6>Sponsored Links by AMEX</h6>
        </div>
        <div className="events">
          {books.map((book, i) => {
            return (
              <div className="event" key={i}>
                <h1>ooo</h1>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
