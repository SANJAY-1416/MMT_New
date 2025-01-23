import React from "react";
import { Link } from "react-router-dom";
import "./Visitor.css";

const Visitors = () => {
  return (
    <div className="S-info">
      <div className="S-reg">
        <Link to="/register">Student</Link>
      </div>
      <div className="S-staff">
        <Link to="/register">Staff</Link>
      </div>
    </div>
  );
};

export default Visitors;
