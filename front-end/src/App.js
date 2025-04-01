// import React, { useState } from "react";
// import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import Register from "./Register";
// import Login from "./Login";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Home from "./Home";
// import StaffPage from "./Pages/StaffPage";
// import StudentPage from "./Pages/StudentPage";
// import VideoPage from "./Pages/VideoPage"; // New route for video
// import VideoUpload from "./component/VideoUpload"; // New component for uploading videos
// import Navigation from "./component/Navigate";
// import VideoList from "./component/VideoList";

// // import Header from "./Header";
// import Visitors from "./Visitor";

// function App() {
//   const [books, setBooks] = useState([]);
//   const [requests, setRequests] = useState([]);
//   const [videos, setVideos] = useState([]); // State for storing uploaded videos

//   // Handle books actions
//   const addBook = (newBook) => {
//     setBooks([...books, { ...newBook, available: true }]);
//   };

//   const removeBook = (title) => {
//     setBooks(books.filter((book) => book.title !== title));
//   };

//   const requestBook = (title, studentName) => {
//     const requestedBook = books.find((book) => book.title === title);
//     if (requestedBook && requestedBook.available) {
//       setRequests([...requests, { title, studentName, accepted: false }]);
//     } else {
//       alert("Book is not available or does not exist.");
//     }
//   };

//   const acceptRequest = (title) => {
//     setRequests(
//       requests.map((request) =>
//         request.title === title ? { ...request, accepted: true } : request
//       )
//     );
//     setBooks(
//       books.map((book) =>
//         book.title === title ? { ...book, available: false } : book
//       )
//     );
//   };

//   // Handle video upload (new functionality)
//   const addVideo = (newVideo) => {
//     setVideos([...videos, newVideo]);
//   };

//   return (
//     <div className="App">
//       {/* <Header /> */}
//       <Navigation />
//       <Routes>
//         <Route
//           path="/staff"
//           element={
//             <StaffPage
//               books={books}
//               addBook={addBook}
//               removeBook={removeBook}
//               requests={requests}
//               acceptRequest={acceptRequest}
//             />
//           }
//         />
//         <Route
//           path="/student"
//           element={<StudentPage books={books} requestBook={requestBook} />}
//         />
//         {/* <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
//                   <Route path="/signup" element={isLoggedIn ? <Navigate to="/home" /> : <SignUp setIsLoggedIn={setIsLoggedIn} />} /> */}

//         {/* New Routes for Video Upload and Video Page */}
//         <Route path="/" element={<VideoList videos={videos} />} />
//         <Route
//           path="/upload-video"
//           element={<VideoUpload addVideo={addVideo} />}
//         />
//         <Route path="/video/:videoId" element={<VideoPage videos={videos} />} />

//         <Route
//           path="/"
//           element={
//             <div>
//               <h1>Welcome to the Library & Video Platform</h1>
//               <p className="para">
//                 Please select a page:
//                 <a href="/staff">Staff</a> |<a href="/student">Student</a> |
//                 <a href="/upload-video">Upload Video</a>
//               </p>
//             </div>
//           }
//         />

//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Visitors />} />
//         <Route path="/home" element={<Home />} />
//         {/* <Route path="/map" element={<Map />} /> */}
//       </Routes>
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import StaffPage from "./Pages/StaffPage";
import StudentPage from "./Pages/StudentPage";
import VideoPage from "./Pages/VideoPage"; // New route for video
import VideoUpload from "./component/VideoUpload"; // New component for uploading videos
import Navigation from "./component/Navigate";
import VideoList from "./component/VideoList";
import Visitors from "./Visitor";
import EBookPage from "./component/EBook";
import UploadEBookPage from "./component/UploadEbook";

function App() {
  const [books, setBooks] = useState([]);
  const [requests, setRequests] = useState([]);
  const [videos, setVideos] = useState([]); // State for storing uploaded videos

  // Handle books actions
  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, available: true }]);
  };

  const removeBook = (title) => {
    setBooks(books.filter((book) => book.title !== title));
  };

  const requestBook = (title, studentName) => {
    const requestedBook = books.find((book) => book.title === title);
    if (requestedBook && requestedBook.available) {
      setRequests([...requests, { title, studentName, accepted: false }]);
    } else {
      alert("Book is not available or does not exist.");
    }
  };

  const acceptRequest = (title) => {
    setRequests(
      requests.map((request) =>
        request.title === title ? { ...request, accepted: true } : request
      )
    );
    setBooks(
      books.map((book) =>
        book.title === title ? { ...book, available: false } : book
      )
    );
  };

  // Handle video upload (new functionality)
  const addVideo = (newVideo) => {
    setVideos([...videos, newVideo]);
  };

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route
          path="/staff"
          element={
            <StaffPage
              books={books}
              addBook={addBook}
              removeBook={removeBook}
              requests={requests}
              acceptRequest={acceptRequest}
            />
          }
        />
        <Route
          path="/student"
          element={<StudentPage books={books} requestBook={requestBook} />}
        />
        <Route path="/" element={<VideoList videos={videos} />} />

        <Route
          path="/upload-video"
          element={<VideoUpload addVideo={addVideo} />}
        />
        <Route path="/video/:videoId" element={<VideoPage videos={videos} />} />

        <Route
          path="/"
          element={
            <div>
              <h1>Welcome to the Library & Video Platform</h1>
              <p className="para">
                Please select a page:
                <a href="/staff">Staff</a> |<a href="/student">Student</a> |
                <a href="/upload-video">Upload Video</a>
              </p>
            </div>
          }
        />
        <Route path="/book" element={<EBookPage />} />
        <Route path="/uploadbook" element={<UploadEBookPage />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Visitors />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;