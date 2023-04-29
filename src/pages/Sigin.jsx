import React, { useEffect, useState } from "react";
import "../styles/login.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../redux/actions/userActions";
import { Bars } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
    if (error) {
      toast.error(error.msg, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // console.log(error)
    }
  }, [navigate, error,userInfo]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  };

  return (
    <div className="Auth-form-container">
      <ToastContainer />
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
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <a href="/signUp"> New User .. Click Here to Register</a>
          </div>
        </form>
      )}
    </div>
  );
};

export default Signin;
