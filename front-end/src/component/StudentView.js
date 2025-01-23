import React from "react";
import "./booklist.css";
function StudentView({ books, requestBook }) {
  const handleRequest = (title) => {
    const studentName = prompt("Enter your name to request this book:");
    if (studentName) {
      requestBook(title, studentName);
    }
  };

  return (
    <div className="book_list">
      <h2>Available Books</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, index) =>
            book.available ? (
              <li key={index}>
                  {book.image && (
                <div className="book-image">
                  <img src={book.image} alt={book.title} style={{ maxHeight: "150px", maxWidth: "100px" }} />
                </div>
              )}
              <span>
                {book.title} by {book.author}</span>
                <button onClick={() => handleRequest(book.title)}>
                  Request
                </button>
              </li>
            ) : null
          )}
        </ul>
      )}
    </div>
  );
}

export default StudentView;
