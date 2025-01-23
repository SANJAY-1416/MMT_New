import React, { useState } from "react";
import BookList from "../component/BookList";
import BookForm from "../component/BookForm";
import Requests from "../component/Request";
import "./staff.css";

function StaffPage({ books, addBook, removeBook, requests, acceptRequest }) {
  const [showRequests, setShowRequests] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  // Mock database of staff credentials (ID and password)
  const staffDatabase = {
    2201721058035: "14/09/2004",
    2201721058031: "24/07/2004",
    2201721058019: "11/11/2002",
  };

  // Function to handle login
  const handleLogin = () => {
    if (staffDatabase[loginId] && staffDatabase[loginId] === password) {
      setAuthenticated(true);
    } else {
      alert("Invalid Staff ID or password. Please try again.");
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    setAuthenticated(false);
    setLoginId("");
    setPassword("");
  };

  // If not authenticated, show the login screen
  if (!authenticated) {
    return (
      <div className="staff_flex">
        <h1>Staff Login</h1>
        <input
          type="text"
          placeholder="Enter your Staff ID"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  // Render the Staff Page when authenticated
  return (
    <div>
      <div className="staff_page">
        <h1>Staff Page</h1>
        <div className="req_log">
          <button onClick={() => setShowRequests(!showRequests)}>
            {showRequests ? "Hide Requests" : "Show Requests"}
          </button>

          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div>
        <BookForm addBook={addBook} />
        {showRequests && (
          <Requests requests={requests} acceptRequest={acceptRequest} />
        )}
        <BookList books={books} removeBook={removeBook} />
      </div>
    </div>
  );
}

export default StaffPage;
