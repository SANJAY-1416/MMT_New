import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./Ebook.css";

const EBookPage = () => {
  // Sample eBook content (dynamic content can be fetched from an API)
  const pages = [
    {
      title: "Welcome to PrepGenie",
      content:
        "This is your first page. Enjoy the experience of digital books!",
    },
    {
      title: "About PrepGenie",
      content:
        "PrepGenie provides eBooks, videos, and tools to help students succeed.",
    },
    {
      title: "Chapter 1",
      content: "Learn how to use the modern library system effectively.",
    },
    {
      title: "Chapter 2",
      content: "Explore videos and eBooks tailored for your study needs.",
    },
    {
      title: "Conclusion",
      content: "Thank you for using PrepGenie. Keep learning and growing!",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <HTMLFlipBook
        width={400}
        height={600}
        size="stretch"
        minWidth={300}
        maxWidth={500}
        minHeight={400}
        maxHeight={700}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="ebook-container"
      >
        {pages.map((page, index) => (
          <div key={index} className="page">
            <h2 style={{ textAlign: "center", paddingTop: "20px" }}>
              {page.title}
            </h2>
            <p style={{ padding: "20px", textAlign: "justify" }}>
              {page.content}
            </p>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default EBookPage;