import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarExample = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const dispatch = useDispatch();
  // const navigate =useNavigate()

  const logOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    // if(!userInfo){
    //   // navigate("/")
    //   // window.location.reload();
    // }
  }, [userInfo]);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">BoostUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {userInfo ? (
              <button className="btn btn-danger" onClick={() => logOut()}>
                Log Out
              </button>
            ) : (
              <Nav.Link href="/signIn">SIGN IN</Nav.Link>
            )}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarExample;
