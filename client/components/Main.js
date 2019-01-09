import React from 'react';
import SearchBars from './SeachBars';
import NavBar from './NavBar';
import Articles from './Articles';

class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <NavBar />
        <h1>bÜkshelph</h1>
        <br />
        <div id="about">
          <p>
            Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
            Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
            Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
            Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
            Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
            Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
          </p>
          <Articles />
        </div>
      </div>
    );
  }
}

export default Main;
