import React from 'react';
import NavBar from './NavBar';
import Articles from './Articles';
import Footer from './Footer';

class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <NavBar />
        <div className="title">
          <h1>BÜQSHELPH</h1>
          <br />
        </div>
        <br />
        <div id="about">
          <p>
            Winter is coming and tis the season of book-lovers! As the weather
            cools and we find ourselves cooped up inside, BÜQSHELPH strives to
            provide everyone with equal access to the literature that warms our
            hearts and ignites our imagination. This is site designed for you
            fire-side-dwellers, hot-tea-sippers, and stay-too-long-in-beders.
            Because at BÜQSHELPH, we believe that everyone should have the
            freedom to stay inside.
            <br />
            <br />
            Use our General Search to find books by your favorite author or all
            the books from your favorite series. For you serious book-worms, we
            also provide an Advanced Search option for you to find the specific
            edition you can't live without. We support searches by ISBN, OCLC,
            OLID, and LCCN.
            <br />
            <br />
            Happy reading to you and yours!
          </p>
        </div>
        <br />
        <Articles />
        <Footer />
      </div>
    );
  }
}

export default Main;
