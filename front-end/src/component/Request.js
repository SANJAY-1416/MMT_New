import React from "react";

function Requests({ requests, acceptRequest }) {
  return (
    <div>
      <h2>Pending Requests</h2>
      {requests.length === 0 ? (
        <p>No pending requests</p>
      ) : (
        <ul>
          {requests.map((request, index) =>
            !request.accepted ? (
              <li key={index}>
                <span>
                  Book: {request.title} requested by {request.studentName}
                </span>
                <button onClick={() => acceptRequest(request.title)}>
                  Accept
                </button>
              </li>
            ) : null
          )}
        </ul>
      )}
    </div>
  );
}

export default Requests;
