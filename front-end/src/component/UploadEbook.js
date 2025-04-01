import React, { useState } from "react";
import "./uploadEbook.css";

const UploadEBookPage = () => {
  const MAX_CHARACTERS_PER_PAGE = 300; // Maximum characters per page
  const [pages, setPages] = useState([""]); // Initialize with a single empty page
  const [heading, setHeading] = useState(""); // Heading input

  const handleTyping = (e) => {
    const value = e.target.value; // Current content typed
    const lastPageIndex = pages.length - 1; // Get the last page index
    const currentLastPage = pages[lastPageIndex]; // Get the content of the last page

    if (value.length > MAX_CHARACTERS_PER_PAGE) {
      // If content exceeds the current page limit
      const remainingContent = value.substring(MAX_CHARACTERS_PER_PAGE); // Overflow content
      pages[lastPageIndex] = value.substring(0, MAX_CHARACTERS_PER_PAGE); // Fill the current page
      setPages([...pages, remainingContent]); // Add a new page for overflow content
    } else {
      pages[lastPageIndex] = value; // Update current page content
    }

    setPages([...pages]); // Update pages with the latest content
  };

  const publishBook = () => {
    console.log("Book Published:", { heading, pages });
    alert("E-Book published successfully!");
  };

  return (
    <div className="container">
      {/* Left Side: Flipbook Preview */}
      <div className="flipbook-container">
        <h2 className="flipbook-title">Flipbook Preview</h2>
        <div className="flipbook">
          {pages.map((page, index) => (
            <div key={index} className="page">
              <h3>{heading}</h3>
              <p>{page}</p>
            </div>
          ))}
        </div>
        <button className="publish-button" onClick={publishBook}>
          Publish Book
        </button>
      </div>

      {/* Right Side: Admin Input */}
      <div className="admin-container">
        <h2>Admin Input</h2>
        <input
          type="text"
          placeholder="Enter heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="input"
        />
        <textarea
          placeholder="Start typing your content..."
          onChange={handleTyping}
          className="textarea"
        ></textarea>
      </div>
    </div>
  );
};

export default UploadEBookPage;
