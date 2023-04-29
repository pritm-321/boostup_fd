import {
    ADD_BOOK_FAIL,
    ADD_BOOK_REQUEST,
    ADD_BOOK_SUCCESS,
  DELETE_BOOK_FAIL,
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
  GET_ALL_BOOKS_FAIL,
  GET_ALL_BOOKS_REQUEST,
  GET_ALL_BOOKS_SUCCESS,
} from "../constants/bookConstant";

export const listBooksReducers = (state = { books: [] }, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS_REQUEST:
      return { loading: true, books: [] };
    case GET_ALL_BOOKS_SUCCESS:
      return { loading: false, books: action.payload };
    case GET_ALL_BOOKS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addBooksReducers = 
    (state = { book: [] }, action) => {
    switch (action.type) {
        case ADD_BOOK_REQUEST:
            return { loading: true, book: [] };
        case ADD_BOOK_SUCCESS:
            return { loading: false, book: action.payload };
        case ADD_BOOK_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const deleteBooksReducers =
    (state = { book: {} }, action) => {
    switch (action.type) {
        case DELETE_BOOK_REQUEST:
            return { loading: true, book: {} };
        case DELETE_BOOK_SUCCESS:
            return { loading: false, book: action.payload };
        case DELETE_BOOK_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

