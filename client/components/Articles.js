import React from 'react';

class Articles extends React.Component {
  render() {
    return (
      <div id="articles">
        <div className="single-article" id="art-1">
          <a href="https://www.newyorker.com/culture/2018-in-review/the-twenty-five-most-read-new-yorker-archive-stories-of-2018">
            <h4>
              The Twenty-Five Most-Read New Yorker Archive Stories of 2018
            </h4>
            <img
              src="https://media.newyorker.com/photos/5c1d07cf8822322ea4b3b71b/master/w_6000,c_limit/Top-archive.gif"
              height="200px"
            />
          </a>
          <a href="https://www.newyorker.com/contributors/erin-overbey">
            <h4>By Erin Overbey</h4>
          </a>
        </div>
        <div className="single-article" id="art-2">
          <a
            href="https://www.newyorker.com/culture/2018-in-review/the-poetry-i-was-grateful-for-in-2018"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>The Poetry I Was Grateful For in 2018</h4>
            <img
              src="https://media.newyorker.com/photos/5c01c29b35b3693789275941/master/w_6000,c_limit/2018IR_Poetry_Savage-Black.jpg"
              height="200px"
            />
          </a>
          <a href="https://www.newyorker.com/contributors/dan-chiasson">
            <h4>By Dan Chiasson</h4>
          </a>
        </div>
        <div className="single-article" id="art-3">
          <a href="https://www.businessinsider.com/25-america-classic-books-to-read-2014-1">
            <h4>25 American Classics Everyone Should Read At Least Once</h4>
            <img
              src="https://amp.businessinsider.com/images/52d6f896eab8ea231d99f741-750-562.jpg"
              height="200px"
            />
          </a>
          <a href="https://www.businessinsider.com/author/megan-willett">
            <h4>By Megan Willett</h4>
          </a>
        </div>
        <div className="single-article">
          <a href="https://www.newyorker.com/culture/2018-in-review/the-best-books-of-2018">
            <h4>The Best Books of 2018</h4>
            <img
              src="https://media.newyorker.com/photos/5c058cc32dbc662c3385131a/master/w_6000,c_limit/2018IR_Books_Savage-Black.jpg"
              height="200px"
            />
          </a>
          <a href="https://www.newyorker.com/contributors/katy-waldman">
            <h4>By Katy Waldman</h4>
          </a>
        </div>
      </div>
    );
  }
}

export default Articles;
