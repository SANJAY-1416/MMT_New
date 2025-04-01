// import React, { useState } from "react";

// function LikeDislike({ initialLikes, initialDislikes }) {
//   // Track the state of like and dislike
//   const [liked, setLiked] = useState(false); // True if liked, false if not
//   const [disliked, setDisliked] = useState(false); // True if disliked, false if not
//   const [likes, setLikes] = useState(initialLikes); // Number of likes
//   const [dislikes, setDislikes] = useState(initialDislikes); // Number of dislikes

//   // Handle like button click
//   const handleLike = () => {
//     if (liked) {
//       // If already liked, remove the like
//       setLiked(false);
//       setLikes(likes - 1);
//     } else {
//       // If not liked, like the video and remove dislike if previously disliked
//       setLiked(true);
//       setDisliked(false);
//       setLikes(likes + 1);
//       if (disliked) setDislikes(dislikes - 1);
//     }
//   };

//   // Handle dislike button click
//   const handleDislike = () => {
//     if (disliked) {
//       // If already disliked, remove the dislike
//       setDisliked(false);
//       setDislikes(dislikes - 1);
//     } else {
//       // If not disliked, dislike the video and remove like if previously liked
//       setDisliked(true);
//       setLiked(false);
//       setDislikes(dislikes + 1);
//       if (liked) setLikes(likes - 1);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleLike} disabled={liked}>
//         👍 {likes}
//       </button>
//       <button onClick={handleDislike} disabled={disliked}>
//         👎 {dislikes}
//       </button>
//     </div>
//   );
// }

// export default LikeDislike;
import React, { useState } from "react";

function LikeDislike({ initialLikes, initialDislikes }) {
  // State for likes, dislikes, and whether the user has acted
  const [likes, setLikes] = useState(initialLikes); // Number of likes
  const [dislikes, setDislikes] = useState(initialDislikes); // Number of dislikes
  const [userAction, setUserAction] = useState(null); // Tracks user's action: "like" or "dislike"

  // Handle like button click
  const handleLike = () => {
    if (!userAction) {
      setLikes(likes + 1); // Increment like count
      setUserAction("like"); // Set user action to "like"
    }
  };

  // Handle dislike button click
  const handleDislike = () => {
    if (!userAction) {
      setDislikes(dislikes + 1); // Increment dislike count
      setUserAction("dislike"); // Set user action to "dislike"
    }
  };

  return (
    <div>
      {/* Like button */}
      <button onClick={handleLike} disabled={!!userAction}>
        👍 {likes}
      </button>
      
      {/* Dislike button */}
      <button onClick={handleDislike} disabled={!!userAction}>
        👎 {dislikes}
      </button>
    </div>
  );
}

export default LikeDislike;
