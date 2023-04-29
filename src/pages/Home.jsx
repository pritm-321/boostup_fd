import React, { useEffect, useState } from "react";
// import SearchBar from "../component/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteBooks, listAllBooks } from "../redux/actions/bookActions";
import { Bars } from "react-loader-spinner";
// import { Delete } from 'react-bootstrap-icons';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, user } = userLogin;

  const listBooks = useSelector((state) => state.bookList);
  const { loading: loadbook, error: errorbook, books } = listBooks;

  const deleteBook = useSelector((state) => state.deleteBook);
  const { loading: loaddelete, error: errordelete, success } = deleteBook;

  const [userData, setUserdata] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(listAllBooks());
  }, [dispatch,success]);

  useEffect(() => {
    const getUserdata = async () => {
      const reqData = await fetch(
        "https://boostup-bd.onrender.com/api/v1/getAllBooks"
      );
      const resData = await reqData.json();
      // console.log(resData);
      setUserdata(resData);
      setFilterdata(resData);
      // console.log(userData);
      // console.log(filterdata);
    };
    getUserdata();
  }, [success]);

  const handleDelete = (id) =>{
    console.log(id)
    dispatch(deleteBooks(id))
  }

  const handleSearch = (event) => {
    const getSearch = event.target.value;
    if (getSearch.length > 0) {
      const searchdata = userData.filter((item) =>
        item.bookTitle.toLowerCase().includes(getSearch) || item.bookAuthor.toLowerCase().includes(getSearch)
      );
      setUserdata(searchdata);
    } else {
      setUserdata(filterdata);
    }
    setQuery(getSearch);
  };
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-12 mt-3 mb-3">
            <h3 className="mb-3">Search Books</h3>
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                value={query}
                className="form-control"
                onChange={(e) => handleSearch(e)}
                placeholder="Enter Book Title or Book Author"
              />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="d-flex flex-row-reverse">
          <Link to="/addBook">
            <button className="btn btn-outline-info">Add Book</button>
          </Link>
          </div>
          <table className="table" style={{ color: "#000" }}>
            <thead>
              <tr>
                <th>ISBN No. </th>
                <th>Book Title</th>
                <th>Book Author</th>
                <th>Price</th>
                <th>Actions</th>

              </tr>
            </thead>
            {loadbook ? (
              <Bars
                height="80"
                width="80"
                color="#268dcd"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              <tbody>
                {userData?.map((book, index) => (
                  <tr key={index}>
                    <td>{book.bookISBN} </td>
                    <td>{book.bookTitle}</td>
                    <td>{book.bookAuthor}</td>
                    <td>{book.price}</td>
                    <td><button className="btn btn-outline-danger" onClick={()=>handleDelete(book._id)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
