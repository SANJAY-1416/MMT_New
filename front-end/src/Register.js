import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { register, reset } from "./features/authSlice";
import "./register.css";
import Login from "./Login";

const Register = () => {
  const [regData, setRegData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = regData;

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

  const registerUser = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    dispatch(register(userData));
  };
  const [isActive, setIsActive] = useState(false);

  const handleSignUp = () => {
    setIsActive(true);
  };

  const handleSignIn = () => {
    setIsActive(false);
  };

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    // <div className="register-top">
    //   <div className="reg_main">
    //     <h2>MCC Map</h2>
    //     <p>Feel the Presence of your loving place!</p>

    //     <form onSubmit={registerUser} className="form">
    //       <div className="reg">
    //         <h3>Register</h3>
    //       </div>
    //       <div className="label-input">
    //         <label>Name:</label>
    //         <input
    //           type="text"
    //           value={regData.name}
    //           onChange={(e) => setRegData({ ...regData, name: e.target.value })}
    //         />
    //         <label>Email:</label>
    //         <input
    //           type="email"
    //           value={regData.email}
    //           onChange={(e) =>
    //             setRegData({ ...regData, email: e.target.value })
    //           }
    //         />
    //         <label>Password:</label>
    //         <input
    //           type="password"
    //           value={regData.password}
    //           onChange={(e) =>
    //             setRegData({ ...regData, password: e.target.value })
    //           }
    //         />
    //       </div>
    //       <div className="footer">
    //         <div className="reg_btn">
    //           <button type="submit">Register</button>
    //         </div>
    //         <div className="last">
    //           <p>
    //             already have an account?<Link to="/login">Login</Link>
    //           </p>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className="maincontainer">
      <div className={`container ${isActive ? "active" : ""}`} id="container">
        {/* Sign Up Form */}
        <div className="form-container sign-up">
          <form onSubmit={registerUser}>
            <h1>Create Account</h1>
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
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              value={regData.name}
              onChange={(e) => setRegData({ ...regData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={regData.email}
              onChange={(e) =>
                setRegData({ ...regData, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              value={regData.password}
              onChange={(e) =>
                setRegData({ ...regData, password: e.target.value })
              }
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        {/* <div className="form-container sign-in">
        <form>
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
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <p>Forgot Your Password?</p>
          <button type="submit">Sign In</button>
        </form>
      </div> */}
        <Login />

        {/* Toggle Panel */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1 className="size">Welcome Back!</h1>
              <p>Enter your personal details to use all site features</p>
              <button className="hidden" id="login" onClick={handleSignIn}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1 className="size">Hello, Friend!</h1>
              <p>
                Register with your personal details to use all site features
              </p>
              <button className="hidden" id="register" onClick={handleSignUp}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
