import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/authSlice";
import "./Navigation.css"; // Add your CSS here
import profile from "../Assets/images/profilee.svg";
import prep from "../Assets/images/preparation.png";
function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  // State to handle menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div>
        <div className="navbar">
          <div className="main_logo">
            {/* Hamburger Menu Icon or Close Button */}
            <button className="hamburger" onClick={toggleMenu}>
              {isMenuOpen ? "×" : "☰"}{" "}
              {/* Display '×' (close) when open, '☰' (hamburger) when closed */}
            </button>
            <img src={prep} alt="prep" width={150} height={80} />
          </div>
          {/* Navigation Links */}
          <div className={`nav-links-container ${isMenuOpen ? "active" : ""}`}>
            <div>
              <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                <li>
                  <Link to="/" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/staff" onClick={closeMenu}>
                    Staff Page
                  </Link>
                </li>
                <li>
                  <Link to="/student" onClick={closeMenu}>
                    Student Page
                  </Link>
                </li>
                <li>
                  <Link to="/upload-video" onClick={closeMenu}>
                    Upload Video
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="header1">
            {user ? (
              <button onClick={onLogout}>Logout</button>
            ) : (
              <>
                {/* <div className="login">
                  <Link to="/login">Login</Link>
                </div> */}
                <div className="register">
                  <Link to="/register">
                    <img src={profile} alt="pro" width={27} />
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* <div className="header1">
        {user ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <>
            <div className="login">
              <Link to="/login">Login</Link>
            </div>
            <div className="register">
              <Link to="/register">Register</Link>
            </div>
          </>
        )}
      </div> */}
    </div>
  );
}

export default Navigation;
