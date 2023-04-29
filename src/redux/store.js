import { createStore, combineReducers , applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loginReducers, signUpReducers } from './reducers/userReducers'
import { addBooksReducers, deleteBooksReducers, listBooksReducers } from "./reducers/bookReducers";

const reducer = combineReducers({
    userLogin: loginReducers,
    userRegister: signUpReducers,
    bookList: listBooksReducers,
    addBook: addBooksReducers,
    deleteBook: deleteBooksReducers
})

const userInfoFromStorage = sessionStorage.getItem("userInfo")
    ? JSON.parse(sessionStorage.getItem("userInfo"))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;