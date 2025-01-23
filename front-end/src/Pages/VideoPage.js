import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function VideoPage({ videos }) {
  const { videoId } = useParams(); // Get the video title (ID) from the URL
  const [videoDetails, setVideoDetails] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const video = videos.find((v) => v.title === videoId);
    if (video) {
      setVideoDetails(video);
    }
  }, [videoId, videos]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (videoDetails && comment) {
      const updatedVideo = {
        ...videoDetails,
        comments: [...videoDetails.comments, comment],
      };
      setVideoDetails(updatedVideo);
      setComment("");
    }
  };

  if (!videoDetails) return <div>Video not found.</div>;

  return (
    <div>
      <h1>{videoDetails.title}</h1>
      <video width="600" controls>
        <source src={videoDetails.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <button>Like</button>
        <button>Dislike</button>
        <button>
          {videoDetails.isSubscribed ? "Unsubscribe" : "Subscribe"}
        </button>
      </div>
      <div>
        <h3>Comments</h3>
        <ul>
          {videoDetails.comments.map((comment, idx) => (
            <li key={idx}>{comment}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Add a comment"
          value={comment}
          onChange={handleCommentChange}
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
}

export default VideoPage;
