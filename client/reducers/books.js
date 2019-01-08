import axios from 'axios';

//action types:
const GOT_BOOKS = 'GOT_BOOKS';
const GOT_BOOKS_BY_AUTHOR = 'GOT_BOOKS_BY_AUTHOR';
const GOT_BOOKS_BY_ISBN = 'GOT_BOOKS_BY_ISBN';

//action creators:
export const gotBooks = books => ({
  type: GOT_BOOKS,
  books,
});

export const gotBooksByAuthor = books => ({
  type: GOT_BOOKS_BY_AUTHOR,
  books,
});

export const gotBooksByISBN = books => ({
  type: GOT_BOOKS_BY_ISBN,
  books,
});

// thunk creator:
export const getBooks = searchInput => {
  return async dispatch => {
    const res = await axios.get(
      `http://openlibrary.org/search.json?title==${searchInput}`
    );
    console.log('res in index.js', res);
    const books = res.data.docs;
    const currAction = gotBooks(books);
    dispatch(currAction);
  };
};

export const getBooksByAuthor = searchInput => {
  return async dispatch => {
    const res = await axios.get(
      `http://openlibrary.org/search.json?author=${searchInput}`
    );
    console.log('res in index.js', res);
    const books = res.data.docs;
    const currAction = gotBooksByAuthor(books);
    dispatch(currAction);
  };
};

export const getBooksByISBN = (idType, searchInput) => {
  return async dispatch => {
    const res = await axios.get(
      `https://openlibrary.org/api/books?bibkeys=${idType}:${searchInput}&jscmd=data&format=json`
    );
    const book = res.data[`${idType}:${searchInput}`];
    console.log('bookInfo', book);
    console.log('bookInfobib_key', book[`${idType}:${searchInput}`]);
    const currAction = gotBooksByISBN(book);
    dispatch(currAction);
  };
};

//initial state:
const initialState = {
  books: [],
  book: '',
};

// reducer:
function bookReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_BOOKS:
      return { books: action.books };
    case GOT_BOOKS_BY_AUTHOR:
      return { books: action.books };
    case GOT_BOOKS_BY_ISBN:
      return { book: action.books };
    default:
      return state;
  }
}
export default bookReducer;
