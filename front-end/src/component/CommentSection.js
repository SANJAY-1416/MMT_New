import React, { useState } from "react";

function CommentsSection({ comments }) {
  const [newComment, setNewComment] = useState("");
  const [allComments, setAllComments] = useState(comments || []);

  const handleSubmit = () => {
    setAllComments([...allComments, { user: "User", comment: newComment }]);
    setNewComment("");
  };

  return (
    <div>
      <h3>Comments</h3>
      {allComments.map((comment, index) => (
        <div key={index}>
          <strong>{comment.user}</strong>: {comment.comment}
        </div>
      ))}
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CommentsSection;
