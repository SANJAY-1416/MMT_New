// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// function VideoPage({ videos }) {
//   const { videoId } = useParams(); // Get the video title (ID) from the URL
//   const [videoDetails, setVideoDetails] = useState(null);
//   const [comment, setComment] = useState("");

//   useEffect(() => {
//     const video = videos.find((v) => v.title === videoId);
//     if (video) {
//       setVideoDetails(video);
//     }
//   }, [videoId, videos]);

//   const handleCommentChange = (e) => {
//     setComment(e.target.value);
//   };

//   const handleAddComment = () => {
//     if (videoDetails && comment) {
//       const updatedVideo = {
//         ...videoDetails,
//         comments: [...videoDetails.comments, comment],
//       };
//       setVideoDetails(updatedVideo);
//       setComment("");
//     }
//   };

//   if (!videoDetails) return <div>Video not found.</div>;

//   return (
//     <div>
//       <h1>{videoDetails.title}</h1>
//       <video width="600" controls>
//         <source src={videoDetails.videoUrl} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div>
//         <button>Like</button>
//         <button>Dislike</button>
//         <button>
//           {videoDetails.isSubscribed ? "Unsubscribe" : "Subscribe"}
//         </button>
//       </div>
//       <div>
//         <h3>Comments</h3>
//         <ul>
//           {videoDetails.comments.map((comment, idx) => (
//             <li key={idx}>{comment}</li>
//           ))}
//         </ul>
//         <input
//           type="text"
//           placeholder="Add a comment"
//           value={comment}
//           onChange={handleCommentChange}
//         />
//         <button onClick={handleAddComment}>Add Comment</button>
//       </div>
//     </div>
//   );
// }

// export default VideoPage;




// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import "./staff.css";

// function VideoPage({ videos }) {
//   const { videoId } = useParams(); // Get the video title (ID) from the URL
//   const [videoDetails, setVideoDetails] = useState(null);
//   const [comment, setComment] = useState("");
//   // const [message, setMessage] = useState("");

//   // Update videoDetails when videoId changes
//   useEffect(() => {
//     const video = videos.find((v) => v.title === videoId);
//     if (video) {
//       setVideoDetails(video);
//     } else {
//       setVideoDetails(null);
//     }
//   }, [videoId, videos]); // Dependency on videoId ensures it updates when the URL changes

//   const handleCommentChange = (e) => {
//     setComment(e.target.value);
//   };

//   const handleAddComment = () => {
//     if (videoDetails && comment) {
//       const updatedVideo = {
//         ...videoDetails,
//         comments: [...videoDetails.comments, comment],
//       };
//       setVideoDetails(updatedVideo);
//       setComment("");
//       // setMessage("Comment added successfully!");
//     }
    
//   };

//   const handleLike = () => {
//     if (videoDetails) {
//       setVideoDetails({ ...videoDetails, likes: videoDetails.likes + 1 });
//     }
//   };

//   const handleDislike = () => {
//     if (videoDetails) {
//       setVideoDetails({ ...videoDetails, dislikes: videoDetails.dislikes + 1 });
//     }
//   };

//   const handleSubscribe = () => {
//     if (videoDetails) {
//       setVideoDetails({
//         ...videoDetails,
//         isSubscribed: !videoDetails.isSubscribed,
//       });
//     }
//   };

//   if (!videoDetails) return <div>Video not found.</div>;

//   return (
//     <div className="video-page">
//       <div className="video-player-container">
//         {/* Video Player (70% width) */}
//         <div className="video-player">
//           <video
//             key={videoDetails.videoUrl} // Force re-render when video changes
//             controls
//             className="video-player-element"
//           >
//             <source src={videoDetails.videoUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <div className="tit-desc">
//             <h1>{videoDetails.title}</h1>
//             <p className="video-description">{videoDetails.description}</p>
//           </div>
//           <div className="video-actions">
//             <div className="like-dislike">
//               <button onClick={handleLike}>Like ({videoDetails.likes})</button>
//               <button onClick={handleDislike}>
//                 Dislike ({videoDetails.dislikes})
//               </button>
//             </div>
//             <button onClick={handleSubscribe}>
//               {videoDetails.isSubscribed ? "Unsubscribe" : "Subscribe"}
//             </button>
//           </div>
//           {/* {message && <p className="message">{message}</p>} */}
//           <div className="comment-input">
//             {/* <h3>Comments</h3> */}
//             <ul>
//               {videoDetails.comments.map((comment, idx) => (
//                 <li key={idx}>{comment}</li>
//               ))}
//             </ul>
//             <div className="cmt-btn">
//               <input
//                 type="text"
//                 placeholder="Add a comment"
//                 value={comment}
//                 onChange={handleCommentChange}
//               />
//               <button onClick={handleAddComment}>Add Comment</button>
//             </div>
//           </div>
//         </div>

//         {/* Recommended Videos (30% width) */}
//         <div className="recommended-videos">
//           <h3>Recommended Videos</h3>
//           <div>
//             {videos
//               .filter((v) => v.title !== videoDetails.title) // Exclude the current video
//               .slice(0, 20) // Show up to 20 recommended videos
//               .map((video, index) => (
//                 <Link
//                   key={index}
//                   to={`/video/${video.title}`}
//                   className="recommended-link"
//                 >
//                   <div className="recommended-video-item">
//                     <img
//                       src={video.thumbnailUrl}
//                       alt={video.title}
//                       className="recommended-thumbnail"
//                     />
//                     <div className="rec-video-title-desc">
//                       <h4>{video.title}</h4>
//                       <p className="recommended-description">
//                         {video.description.length > 100
//                           ? `${video.description.substring(0, 100)}...`
//                           : video.description}
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VideoPage;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./staff.css";

function VideoPage({ videos }) {
  const { videoId } = useParams(); // Get the video title (ID) from the URL
  const [videoDetails, setVideoDetails] = useState(null);
  const [userReaction, setUserReaction] = useState(null); // Tracks user reaction: 'like', 'dislike', or null
  const [comment, setComment] = useState("");
  // Update videoDetails when videoId changes
  useEffect(() => {
    const video = videos.find((v) => v.title === videoId);
    if (video) {
      setVideoDetails(video);
    } else {
      setVideoDetails(null);
    }
  }, [videoId, videos]);

  const handleLike = () => {
    if (videoDetails) {
      if (userReaction === "like") {
        // If already liked, reset like
        setVideoDetails({ ...videoDetails, likes: videoDetails.likes - 1 });
        setUserReaction(null);
      } else {
        // Like the video
        const updatedLikes = userReaction === "dislike" ? videoDetails.likes + 1 : videoDetails.likes + 1;
        const updatedDislikes = userReaction === "dislike" ? videoDetails.dislikes - 1 : videoDetails.dislikes;
        setVideoDetails({ ...videoDetails, likes: updatedLikes, dislikes: updatedDislikes });
        setUserReaction("like");
      }
    }
  };

  const handleDislike = () => {
    if (videoDetails) {
      if (userReaction === "dislike") {
        // If already disliked, reset dislike
        setVideoDetails({ ...videoDetails, dislikes: videoDetails.dislikes - 1 });
        setUserReaction(null);
      } else {
        // Dislike the video
        const updatedDislikes = userReaction === "like" ? videoDetails.dislikes + 1 : videoDetails.dislikes + 1;
        const updatedLikes = userReaction === "like" ? videoDetails.likes - 1 : videoDetails.likes;
        setVideoDetails({ ...videoDetails, dislikes: updatedDislikes, likes: updatedLikes });
        setUserReaction("dislike");
      }
    }
  };

  const handleSubscribe = () => {
    if (videoDetails) {
      setVideoDetails({
        ...videoDetails,
        isSubscribed: !videoDetails.isSubscribed,
      });
    }
  };

  if (!videoDetails) return <div>Video not found.</div>;

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

  return (
    <div className="video-page">
      <div className="video-player-container">
        {/* Video Player (70% width) */}
        <div className="video-player">
          <video
            key={videoDetails.videoUrl} // Force re-render when video changes
            controls
            className="video-player-element"
          >
            <source src={videoDetails.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="tit-desc">
            <h1>{videoDetails.title}</h1>
            <p className="video-description">{videoDetails.description}</p>
          </div>
          <div className="video-actions">
            <div className="like-dislike">
              <button onClick={handleLike}>
                Like ({videoDetails.likes})
              </button>
              <button onClick={handleDislike}>
                Dislike ({videoDetails.dislikes})
              </button>
            </div>
            <button onClick={handleSubscribe}>
              {videoDetails.isSubscribed ? "Unsubscribe" : "Subscribe"}
            </button>
          </div>
          <div className="comment-input">
             {/* <h3>Comments</h3> */}
            <ul>
           {videoDetails.comments.map((comment, idx) => (
                <li key={idx}>{comment}</li>
              ))}
            </ul>
            <div className="cmt-btn">
              <input
                type="text"
                placeholder="Add a comment"
                value={comment}
                onChange={handleCommentChange}
              />
              <button onClick={handleAddComment}>Add Comment</button>
            </div>
          </div>
        </div>

        {/* Recommended Videos (30% width) */}
        <div className="recommended-videos">
          <h3>Recommended Videos</h3>
          <div>
            {videos
              .filter((v) => v.title !== videoDetails.title) // Exclude the current video
              .slice(0, 20) // Show up to 20 recommended videos
              .map((video, index) => (
                <Link
                  key={index}
                  to={`/video/${video.title}`}
                  className="recommended-link"
                >
                  <div className="recommended-video-item">
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="recommended-thumbnail"
                    />
                    <div className="rec-video-title-desc">
                      <h4>{video.title}</h4>
                      <p className="recommended-description">
                        {video.description.length > 100
                          ? `${video.description.substring(0, 100)}...`
                          : video.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;

