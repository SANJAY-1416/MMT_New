import React, { useState } from "react";

function LikeDislike({ initialLikes, initialDislikes }) {
  // Track the state of like and dislike
  const [liked, setLiked] = useState(false); // True if liked, false if not
  const [disliked, setDisliked] = useState(false); // True if disliked, false if not
  const [likes, setLikes] = useState(initialLikes); // Number of likes
  const [dislikes, setDislikes] = useState(initialDislikes); // Number of dislikes

  // Handle like button click
  const handleLike = () => {
    if (liked) {
      // If already liked, remove the like
      setLiked(false);
      setLikes(likes - 1);
    } else {
      // If not liked, like the video and remove dislike if previously disliked
      setLiked(true);
      setDisliked(false);
      setLikes(likes + 1);
      if (disliked) setDislikes(dislikes - 1);
    }
  };

  // Handle dislike button click
  const handleDislike = () => {
    if (disliked) {
      // If already disliked, remove the dislike
      setDisliked(false);
      setDislikes(dislikes - 1);
    } else {
      // If not disliked, dislike the video and remove like if previously liked
      setDisliked(true);
      setLiked(false);
      setDislikes(dislikes + 1);
      if (liked) setLikes(likes - 1);
    }
  };

  return (
    <div>
      <button onClick={handleLike} disabled={disliked}>
        👍 {likes}
      </button>
      <button onClick={handleDislike} disabled={liked}>
        👎 {dislikes}
      </button>
    </div>
  );
}

export default LikeDislike;
