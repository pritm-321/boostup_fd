import axios from "axios";
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
import Swal from 'sweetalert2/dist/sweetalert2.js'

export const listAllBooks = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_BOOKS_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get("https://boostup-bd.onrender.com/api/v1/getAllBooks", config);
    dispatch({ type: GET_ALL_BOOKS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_BOOKS_FAIL, payload: error.message });
  }
};

export const addBooks = ( bookISBN, bookTitle, bookAuthor, price ) => async (dispatch, getState) =>{
    try {
        dispatch({ type: ADD_BOOK_REQUEST });
        const { userLogin: { userInfo } } = getState();
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        
        const { data } = await axios.post(
            "https://boostup-bd.onrender.com/api/v1/addBook",
            { bookISBN, bookTitle, bookAuthor, price },
            config
        );
        dispatch({ type: ADD_BOOK_SUCCESS, payload: data });
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Book has been added successfully',
            showConfirmButton: true,
            timer: 1500
            })

    } catch (error) {
        dispatch({ type: ADD_BOOK_FAIL, payload: error.message });
        Swal.fire
        ({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })

    }
};

export const deleteBooks = ( id ) => async (dispatch, getState) =>{
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
            `https://boostup-bd.onrender.com/api/v1/deleteBookById/${id}`,
            config
        );
        dispatch({ type: DELETE_BOOK_SUCCESS, payload: data });
        Swal.fire
        ({
            icon: 'success',
            title: 'Book has been deleted successfully',
            showConfirmButton: true,
            timer: 2000
        })
    } catch (error) {
        dispatch({ type: DELETE_BOOK_FAIL, payload: error.message });
        Swal.fire
        ({
            icon: 'error',
            title: 'Oops...',
            text: 'Login Please and try later',
        })
    }
}