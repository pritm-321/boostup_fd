import axios from "axios";
import {
    DELETE_BOOK_FAIL,
    DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
  GET_ALL_BOOKS_FAIL,
  GET_ALL_BOOKS_REQUEST,
  GET_ALL_BOOKS_SUCCESS,
} from "../constants/bookConstant";

export const listAllBooks = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_BOOKS_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get("/api/books/getallbooks", config);
    dispatch({ type: GET_ALL_BOOKS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_BOOKS_FAIL, payload: error.message });
  }
};

export const addBooks = ( bookISBN, bookTitle, bookAuthor, price ) => async (dispatch, getState) =>{
    try {
        dispatch({ type: GET_ALL_BOOKS_REQUEST });
        const { userLogin: { userInfo } } = getState();
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.post(
            "/api/books/addbook",
            { bookISBN, bookTitle, bookAuthor, price },
            config
        );
        dispatch({ type: GET_ALL_BOOKS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ALL_BOOKS_FAIL, payload: error.message });
    }
};

export const deleteBooks = ( bookISBN ) => async (dispatch, getState) =>{
    try {
        dispatch({ type: DELETE_BOOK_REQUEST });
        const { userLogin: { userInfo } } = getState();
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.delete(
            "/api/books/deletebook",
            { bookISBN },
            config
        );
        dispatch({ type: DELETE_BOOK_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DELETE_BOOK_FAIL, payload: error.message });
    }
}