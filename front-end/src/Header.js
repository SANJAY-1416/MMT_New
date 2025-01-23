import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "./features/authSlice";
// import logoimg from "./Assets/images/image.png";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="header">
      <div className="header2">
        <div className="logo">
          <nav className="navbar">
            {/* Hamburger Menu Icon or Close Button */}
            <button className="hamburger" onClick={toggleMenu}>
              {isMenuOpen ? "×" : "☰"}{" "}
              {/* Display '×' (close) when open, '☰' (hamburger) when closed */}
            </button>

            {/* Navigation Links */}
            <div
              className={`nav-links-container ${isMenuOpen ? "active" : ""}`}
            >
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
          </nav>
        </div>
        <div className="header1">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
