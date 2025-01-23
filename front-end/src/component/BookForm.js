// import React, { useState } from "react";
// import "./bookform.css";
// function AddBookForm({ addBook }) {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (title && author) {
//       addBook({ title, author });
//       setTitle("");
//       setAuthor("");
//     }
//   };

//   return (
//     <div>
//       <div className="BookForm">
//         <h2>Add a New Book</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <div className="title_input">
//               <label>Title: </label>
//               <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="title_input">
//               <label>Author: </label>
//               <input
//                 type="text"
//                 value={author}
//                 onChange={(e) => setAuthor(e.target.value)}
//                 required
//               />
//             </div>
//           </div>
//           <button type="submit">Add Book</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddBookForm;
import React, { useState } from "react";
import "./bookform.css";

function AddBookForm({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      addBook({ title, author, image });
      setTitle("");
      setAuthor("");
      setImage(null);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Convert file to a URL that can be displayed as an image
    }
  };

  return (
    <div>
      <div className="BookForm">
        <h2>Add a New Book</h2>
        <form onSubmit={handleSubmit}>
          {/* Image Preview */}
          {image && (
            <div className="image-preview">
              <img src={image} alt="Book cover preview" style={{ maxHeight: "200px", maxWidth: "150px" }} />
            </div>
          )}

          {/* File input for image */}
          <div className="file-input">
            <label htmlFor="book-image">Choose Book Cover Image: </label>
            <input
              type="file"
              id="book-image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {/* Title Input */}
          <div className="title_input">
            <label>Title: </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Author Input */}
          <div className="title_input">
            <label>Author: </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>

          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default AddBookForm;
