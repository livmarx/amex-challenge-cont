import React, { Component } from 'react';
import axios from 'axios';

export default class SingleAircraft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coverArtUrl: '',
      publishDate: '',
      author: '',
    };
  }

  async componentWillMount(isbn) {
    result = await axios.get(
      'http://openlibrary.org/api/volumes/brief/isbn/${isbn}.json'
    );
    const cover = result.records.items[0].cover.large;
    this.setState({ coverArtUrl: cover });
  }

  render() {
    return (
      <div>
        <h1>Single Book Component</h1>
        <img
          src={this.state.coverArtUrl}
          alt="Smiley face"
          height="42"
          width="42"
        />{' '}
      </div>
    );
  }
}
