import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBooks } from "../redux/actions/bookActions";
import { Bars } from "react-loader-spinner";

const AddBook = () => {
  const [bookISBN, setBookISBN] = useState();
  const [bookTitle, setBookTitle] = useState();
  const [bookAuthor, setBookAuthor] = useState();
  const [price, setPrice] = useState();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addBooks(bookISBN, bookTitle, bookAuthor, price));
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const addBook = useSelector((state) => state.addBook);
  const { loading, error, book } = addBook;

  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/signIn");
    }
  }, [userInfo]);
  return (
    <section
      className="vh-120"
      style={{ backgroundColor: "#eee", padding: "20px" }}
    >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Add Books
                    </p>
                    {loading ? (
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
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              onChange={(e) => setBookISBN(e.target.value)}
                              required
                            />
                            <label className="form-label" for="form3Example1c">
                              Book ISBN Number
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example3c"
                              className="form-control"
                              required
                              onChange={(e) => setBookTitle(e.target.value)}
                            />
                            <label className="form-label" for="form3Example3c">
                              Book Title
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example4c"
                              className="form-control"
                              required
                              onChange={(e) => setBookAuthor(e.target.value)}
                            />
                            <label className="form-label" for="form3Example4c">
                              Book Author
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="number"
                              id="form3Example4cd"
                              className="form-control"
                              required
                              onChange={(e) => setPrice(e.target.value)}
                            />
                            <label className="form-label" for="form3Example4cd">
                              Book Price
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?w=996&t=st=1682778871~exp=1682779471~hmac=395b10587ff562ce3bb74bf980e02ae20552bc775f80ee6e9515577eb947c2fd"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddBook;
