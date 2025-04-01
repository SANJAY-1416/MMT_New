// import React, { useState } from "react";
// import "./videoupload.css";
// function VideoUpload({ addVideo }) {
//   const [videoFile, setVideoFile] = useState(null);
//   const [videoTitle, setVideoTitle] = useState("");
//   const [videoDescription, setVideoDescription] = useState("");
//   const [videoUrl, setVideoUrl] = useState(null);

//   // Handle file input change
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setVideoFile(file);
//       const fileUrl = URL.createObjectURL(file);
//       setVideoUrl(fileUrl);
//     }
//   };

//   // Handle video upload
//   const handleVideoUpload = () => {
//     if (videoFile && videoTitle && videoDescription) {
//       const newVideo = {
//         title: videoTitle,
//         description: videoDescription,
//         videoUrl: videoUrl,
//         likes: 0,
//         dislikes: 0,
//         comments: [],
//         isSubscribed: false,
//       };
//       addVideo(newVideo);
//       setVideoTitle("");
//       setVideoDescription("");
//       setVideoFile(null);
//       setVideoUrl(null);
//       alert("Video uploaded successfully!");
//     } else {
//       alert("Please fill in all fields and select a video file.");
//     }
//   };

//   return (
//     <div className="main_videoupload">
//       <div className="videoupload_page">
//         <h2>Upload Video</h2>
//         <input
//           type="text"
//           placeholder="Video Title"
//           value={videoTitle}
//           onChange={(e) => setVideoTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Video Description"
//           value={videoDescription}
//           onChange={(e) => setVideoDescription(e.target.value)}
//         />
//         <input type="file" accept="video/*" onChange={handleFileChange} />
//         {videoUrl && (
//           <div>
//             <h4>Video Preview:</h4>
//             <video width="300" height="175" controls>
//               <source src={videoUrl} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         )}
//         <button onClick={handleVideoUpload}>Upload Video</button>
//       </div>
//     </div>
//   );
// }

// export default VideoUpload;
import React, { useState } from "react";
import "./videoupload.css";

function VideoUpload({ addVideo }) {
  const [videoFile, setVideoFile] = useState(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);

  // Handle video file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
      const fileUrl = URL.createObjectURL(file);
      setVideoUrl(fileUrl);
    }
  };

  // Handle thumbnail file input change
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailFile(file);
      const fileUrl = URL.createObjectURL(file);
      setThumbnailUrl(fileUrl);
    }
  };

  // Handle video upload
  const handleVideoUpload = () => {
    if (videoFile && videoTitle && videoDescription && thumbnailFile) {
      const newVideo = {
        title: videoTitle,
        description: videoDescription,
        videoUrl: videoUrl,
        thumbnailUrl: thumbnailUrl, // Store thumbnail image URL
        likes: 0,
        dislikes: 0,
        comments: [],
        isSubscribed: false,
      };
      addVideo(newVideo);
      setVideoTitle("");
      setVideoDescription("");
      setVideoFile(null);
      setVideoUrl(null);
      setThumbnailFile(null);
      setThumbnailUrl(null);
      alert("Video uploaded successfully!");
    } else {
      alert(
        "Please fill in all fields, select a video file, and choose a thumbnail."
      );
    }
  };

  return (
    <div className="main_videoupload">
      <div className="videoupload_page">
        <h2>Upload Video</h2>

        <input
          type="text"
          placeholder="Video Title"
          value={videoTitle}
          onChange={(e) => setVideoTitle(e.target.value)}
        />

        <textarea
          placeholder="Video Description"
          value={videoDescription}
          onChange={(e) => setVideoDescription(e.target.value)}
        />

        <input type="file" accept="video/*" onChange={handleFileChange} />

        {videoUrl && (
          <div>
            <h4>Video Preview:</h4>
            <video width="300" height="175" controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <input type="file" accept="image/*" onChange={handleThumbnailChange} />

        {thumbnailUrl && (
          <div>
            <h4>Thumbnail Preview:</h4>
            <img src={thumbnailUrl} alt="Thumbnail" width="200" />
          </div>
        )}

        <button onClick={handleVideoUpload}>Upload Video</button>
      </div>
    </div>
  );
}

export default VideoUpload;