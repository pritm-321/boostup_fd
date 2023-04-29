import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { listAllBooks } from "../redux/actions/bookActions";

const Searchdata = () => {
  const [userData, setUserdata] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const listBooks = useSelector((state) => state.bookList);
  const { loading: loadbook, error: errorbook, books } = listBooks;

  useEffect(() => {
    dispatch(listAllBooks());
    setUserdata(books);
    setFilterdata(books);
  }, [dispatch]);

  const handlesearch = (event) => {
    const getSearch = event.target.value;
    if (getSearch.length > 0) {
      const searchdata = userData.filter((item) =>
        item.bookTitle.toLowerCase().includes(getSearch)
      );
      setUserdata(searchdata);
    } else {
      setUserdata(filterdata);
    }
    setQuery(getSearch);
  };

  return (
    <React.Fragment>
      <Container>
        
      </Container>
    </React.Fragment>
  );
};
export default Searchdata;
