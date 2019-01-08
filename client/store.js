import { createStore, applyMiddleware } from 'redux';
import bookReducer from './reducers/books';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

export default createStore(
  bookReducer,
  applyMiddleware(thunkMiddleware, loggingMiddleware)
);
