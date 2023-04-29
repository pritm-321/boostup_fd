import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import NavbarExample from "./component/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Sigin";
import Signup from "./pages/Signup";
import AddBook from "./pages/AddBook";

function App() {
  return (
    <>
      <NavbarExample />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signIn" element={<Signin />}/>
        <Route path="/signUp" element={<Signup />}/>
        <Route path="/addBook" element={<AddBook />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
