import axios from "axios";
import {
  ADD_USER_FAIL,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
} from "../constants/userConstants";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Navigate, useNavigate } from "react-router-dom";

export const signIn = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "https://boostup-bd.onrender.com/api/v1/login",
      { email, password },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    sessionStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.message });
  }
};

export const signUp = (email,password,name,phone) => async (dispatch) => {
  try {
    dispatch({ type: ADD_USER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "https://boostup-bd.onrender.com/api/v1/register",
      { email,password,name,phone },
      config
    );
    dispatch({ type: ADD_USER_SUCCESS, payload: data });
    // sessionStorage.setItem("userInfo", JSON.stringify(data));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your account has been created successfully',
      showConfirmButton: false,
      timer: 3500,
      footer: '<a href="/signIn">Go to Sign In page</a>'
    })  
  } catch (error) {
    dispatch({ type: ADD_USER_FAIL, payload: error.message });
    Swal.fire 
    ({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>'
    })
  }
};

export const logout = () => (dispatch) => {
  sessionStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGIN_SUCCESS, payload:"" });
};
