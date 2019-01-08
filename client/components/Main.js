import React from 'react';
import SearchBars from './SeachBars';

class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="main">
        <h1>Bookshelf</h1>
        <SearchBars />
        <br />
      </div>
    );
  }
}

export default Main;
