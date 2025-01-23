// import React from "react";
// import "./booklist.css";
// function BookList({ books, removeBook }) {
//   return (
//     <div className="book_list">
//       <h2>Books List</h2>
//       {books.length === 0 ? (
//         <p>No books available</p>
//       ) : (
//         <ul>
//           {books.map((book, index) => (
//             <li key={index}>
              
//               <span>
//                 {book.title} by {book.author}
//               </span>
//               <button onClick={() => removeBook(book.title)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default BookList;
import React from "react";
import "./booklist.css";

function BookList({ books, removeBook }) {
  return (
    <div className="book_list">
      <h2>Books List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              {/* If an image exists, display it */}
              {book.image && (
                <div className="book-image">
                  <img src={book.image} alt={book.title} style={{ maxHeight: "150px", maxWidth: "100px" }} />
                </div>
              )}

              {/* Book Title and Author */}
              <span>
                {book.title} by {book.author}
              </span>

              {/* Remove Button */}
              <button onClick={() => removeBook(book.title)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
