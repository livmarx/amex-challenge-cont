import React from 'react';
import SearchBars from './SeachBars';

class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="welcome">
        <h1>Book Search:</h1>
        <SearchBars />
        <br />
      </div>
    );
  }
}

export default Main;
