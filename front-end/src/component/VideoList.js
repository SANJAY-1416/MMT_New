import React, { useState } from "react";
import { Link } from "react-router-dom";
import LikeDislike from "../component/LikeDislike"; // Import LikeDislike component
import SubscriptionButton from "../component/SubcriptionButton"; // Import SubscriptionButton component

function VideoList({ videos }) {
  // State to track the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle the change in the search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter videos based on the search query
  const filteredVideos =
    videos.filter(
      (video) =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase()) // Optionally, you can include other properties like description
    ) || [];

  return (
    <div className="searchbar">
      {/* <h1>Videos</h1> */}

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for videos..."
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {/* If no videos match the search query */}
      {filteredVideos.length === 0 ? (
        <p>No results found</p>
      ) : (
        <div className="videogrid">
          {filteredVideos.map((video, index) => (
            <div key={index} className="video-item">
              <video width="300" height="175" controls>
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h2>{video.title}</h2>
              <div className="likedislike">
                {/* Use the LikeDislike component and pass initial likes and dislikes */}
                <LikeDislike
                  initialLikes={video.likes}
                  initialDislikes={video.dislikes}
                />
                {/* Use the SubscriptionButton component */}
                <SubscriptionButton initialSubscribed={video.subscribed} />
              </div>
              <div>
                <h3>Comments</h3>
                <ul>
                  {video.comments.map((comment, idx) => (
                    <li key={idx}>{comment}</li>
                  ))}
                </ul>
                <input type="text" placeholder="Add a comment" />
                <button>Add Comment</button>
              </div>
              <Link to={`/video/${video.title}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VideoList;
