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

export const gotBooksByISBN = (bookData, bookDetails, searchInput) => ({
  type: GOT_BOOKS_BY_ISBN,
  bookData,
  bookDetails,
  searchInput,
});

// thunk creator:
export const getBooks = searchInput => {
  return async dispatch => {
    const res = await axios.get(
      `http://openlibrary.org/search.json?title==${searchInput}`
    );
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
    const books = res.data.docs;
    const currAction = gotBooksByAuthor(books);
    dispatch(currAction);
  };
};

export const getBooksByISBN = (idType, searchInput) => {
  return async dispatch => {
    const dataRes = await axios.get(
      `https://openlibrary.org/api/books?bibkeys=${idType}:${searchInput}&jscmd=data&format=json`
    );
    const detailsRes = await axios.get(
      `https://openlibrary.org/api/books?bibkeys=${idType}:${searchInput}&jscmd=details&format=json`
    );
    const bookData = dataRes.data[`${idType}:${searchInput}`];
    const bookDetails = detailsRes.data[`${idType}:${searchInput}`];
    const currAction = gotBooksByISBN(bookData, bookDetails, searchInput);
    dispatch(currAction);
  };
};

//initial state:
const initialState = {
  books: [],
  book: '',
  bookInfo: '',
  searchInput: '',
};

// reducer:
function bookReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_BOOKS:
      return { books: action.books };
    case GOT_BOOKS_BY_AUTHOR:
      return { books: action.books };
    case GOT_BOOKS_BY_ISBN:
      return {
        bookData: action.bookData,
        bookDetails: action.bookDetails,
        searchInput: action.searchInput,
      };
    default:
      return state;
  }
}
export default bookReducer;
