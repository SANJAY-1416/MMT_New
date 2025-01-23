import React from "react";
// import { Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "./features/authSlice";
import "./login.css";
import { useEffect } from "react";

const Login = () => {
  const [logData, setLogData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = logData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/home");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const loginUser = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {/* <div className="register-top">
        <div className="reg_main">
          <h2>MCC Map</h2>
          <p>Feel the Presence of your loving place!</p>
          <h3>Login</h3>
        
          <form onSubmit={loginUser} className="form">
            <div className="label-input">
              <label>Email</label>
              <input
                type="email"
                value={logData.email}
                onChange={(e) =>
                  setLogData({ ...logData, email: e.target.value })
                }
              />
              <label>Password</label>
              <input
                type="password"
                value={logData.password}
                onChange={(e) =>
                  setLogData({ ...logData, password: e.target.value })
                }
              />
            </div>
            <div className="footer">
              <div className="reg_btn">
                <button type="submit">Login</button>
              </div>
              <div className="last">
                <p>
                  Create your account <Link to="/register">here</Link>{" "}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div> */}
      <div className="form-container sign-in">
        <form onSubmit={loginUser}>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="https://google.com" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="https://facebook.com" className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://github.com" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email and password</span>
          <input
            type="email"
            placeholder="Email"
            value={logData.email}
            onChange={(e) => setLogData({ ...logData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={logData.password}
            onChange={(e) =>
              setLogData({ ...logData, password: e.target.value })
            }
          />
          <p>Forgot Your Password?</p>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
