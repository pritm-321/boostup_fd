import { ADD_USER_FAIL, ADD_USER_REQUEST, ADD_USER_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstants";

export const loginReducers =
    (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true,};
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const signUpReducers =
    (state = {}, action) => {
    switch (action.type) {
        case ADD_USER_REQUEST:
            return { loading: true, };
        case ADD_USER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case ADD_USER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }   
};

