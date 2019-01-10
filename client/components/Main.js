import React from 'react';
import SearchBars from './SeachBars';
import NavBar from './NavBar';
import Articles from './Articles';
import Footer from './Footer';

class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <NavBar />
        <div className="title">
          <img src="bookshelf.png" height="100" className="bookself-img" />
          <h1>bÜkshelph</h1>
          <img src="bookshelf.png" height="100" className="bookself-img" />
        </div>
        <br />
        <div id="about">
          <p>
            Winter is coming and tis the season of book-lovers! As the weather
            cools and we find ourselves cooped up inside, bÜkshelph strives to
            provide everyone with equal access to the literature that warms our
            hearts and ignites our imagination. This is site designed for you
            fire-side-dwellers, hot-tea-sippers, and stay-too-long-in-beders.
            Because at bÜkshelph, we believe that everyone should have the
            freedom to stay inside.
          </p>
          <h6>----------------------------------------</h6>
          <p>
            Use our General Search to find books by your favorite author or all
            the books from your favorite series. For you serious book-worms, we
            also provide an Advanced Search option for you to find the specific
            edition you can't live without. We support searches by ISBN, OCLC,
            OLID, and LCCN.
          </p>
          <p>Happy reading to you and yours!</p>
          <h6>----------------------------------------</h6>
          <p>
            If you don't know where to start your reading journy, check out the
            articles below!
          </p>
        </div>
        <Articles />
        <Footer />
      </div>
    );
  }
}

export default Main;
