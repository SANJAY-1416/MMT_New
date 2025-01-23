import React, { useState } from "react";
import StudentView from "../component/StudentView";
import "./staff.css"
function StudentPage({ books, requestBook }) {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  // Mock database of student credentials (ID and password)
  const studentDatabase = {
    2201721058035: "14/09/2004",
    2201721058031: "24/07/2004",
    2201721058019: "11/11/2002",
  };

  // Function to handle login
  const handleLogin = () => {
    if (studentDatabase[loginId] && studentDatabase[loginId] === password) {
      setAuthenticated(true);
    } else {
      alert("Invalid Student ID or password. Please try again.");
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
        <h1>Student Login</h1>
        <div className="login-form">
          <input
            type="text"
            placeholder="Enter your Student ID"
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
      </div>
    );
  }

  // Render the Student Page when authenticated
  return (
    <div>
    <div className="stu_page">
      <h1>Student Page</h1>
      
      <button onClick={handleLogout}>Logout</button></div>
      <StudentView books={books} requestBook={requestBook} />
    </div>
  );
}

export default StudentPage;
