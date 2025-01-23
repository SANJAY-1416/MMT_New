// // // -----------------

// import React, { useRef, useState, useEffect } from "react";
// import {
//   useJsApiLoader,
//   GoogleMap,
//   Marker,
//   Autocomplete,
//   DirectionsRenderer,
// } from "@react-google-maps/api";
// import { FaLocationArrow, FaTimes } from "react-icons/fa";
// import { REACT_APP_GOOGLE_MAPS_KEY } from "./component/Constant/constantt";
// import "./Home.css";
// import orgimg from "./Assets/images/circle.svg";
// import dest from "./Assets/images/location2.svg";
// import direct from "./Assets/images/directly.svg";
// import wrong from "./Assets/images/wrong.svg";

// const center = { lat: 12.921376059319845, lng: 80.12200795199273 };

// const locations = {
//   canteen: {
//     lat: 12.920429777525129,
//     lng: 80.12263138753151,
//     details: "Canteen Students Centre",
//     adress: "உணவகம் Tambaram,Chennai,Tamil Nadu ",
//     image:
//       "https://lh5.googleusercontent.com/p/AF1QipMMR91fDEpDxiuFTCodF6GQ2xsWnSsDUlb-L4_S=w427-h240-k-no",
//   },
//   millerLibrary: {
//     lat: 12.92028,
//     lng: 80.12022,
//     details: "Miller Library",
//     adress: "மில்லர் நூலகம் Tambaram,Chennai,Tamil Nadu ",
//     image: "https://educationmart.in/wp-content/uploads/2018/04/mcc.jpg",
//   },
//   atrsblock: {
//     lat: 12.92175,
//     lng: 80.12133,
//     details: "Arts Block.",
//     adress: "கலைப் பிரிவு  Tambaram,Chennai,Tamil Nadu ",
//     image:
//       "https://www.careerindia.com/college-photos/375x275/3037/mcc_1459156887.jpg",
//   },
//   scienceblock: {
//     lat: 12.92125,
//     lng: 80.1223,
//     details: "Science Block",
//     adress: "அறிவியல் பிரிவு Tambaram,Chennai,Tamil Nadu ",
//     image:
//       "https://www.collegebatch.com/static/clg-gallery/madras-christian-college-chennai-218760.jpg",
//   },
//   gentsrestroom: {
//     lat: 12.92125,
//     lng: 80.12117,
//     details: "Gents Rest Room",
//     adress: "ஆண்கள் ஓய்வறை Tambaram,Chennai,Tamil Nadu ",
//     image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
//   },
//   andersonhall: {
//     lat: 12.92126,
//     lng: 80.1223,
//     adress: "ஆண்டர்சன் ஹால் (Auditorium) Tambaram,Chennai,Tamil Nadu ",
//     image:
//       "https://lh5.googleusercontent.com/p/AF1QipP7sGKj9Jh7iOMJKUku38kU3DC2BpMUXj9w6pmF=w408-h306-k-no",
//     details: "Anderson Hall",
//   },
//   loungeforwomen: {
//     lat: 12.92069,
//     lng: 80.12238,
//     adress: "பெண்கள் ஓய்வறை Tambaram,Chennai,Tamil Nadu ",
//     image: "https://mcc.edu.in/wp-content/uploads/2021/05/1-2.jpg",
//     details: "Lounge For Women",
//   },
//   macphail: {
//     lat: 12.9193,
//     lng: 80.12178,
//     adress: "மேக்பைல் (Auditorium) Tambaram,Chennai,Tamil Nadu ",
//     image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
//     details: "Macphail",
//   },
//   pavilion: {
//     lat: 12.91719,
//     lng: 80.12182,
//     adress: "உணவகம் Tambaram,Chennai,Tamil Nadu ",
//     image:
//       "https://images.collegedunia.com/public/reviewPhotos/305264/IMG_20220917_072652.jpg?mode=cover",
//     details: "Pavilion",
//   },
//   mrfinnovation: {
//     lat: 12.92023,
//     lng: 80.12169,
//     adress: "உணவகம் Tambaram,Chennai,Tamil Nadu ",
//     image: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png",
//     details: "MRF Innovation.",
//   },
//   iacs: {
//     lat: 12.91556,
//     lng: 80.12591,
//     details: "IACS",
//     adress: "உணவகம் Tambaram,Chennai,Tamil Nadu ",
//     image:
//       "https://lh5.googleusercontent.com/p/AF1QipPG3ES4HKUrf5HHBjLLeq3NR4ByjT_KJCQ8zCNX=w526-h240-k-no",
//   },
//   mccfarm: {
//     lat: 12.91556,
//     lng: 80.12591,
//     adress: "உணவகம் Tambaram,Chennai,Tamil Nadu ",
//     image:
//       "https://lh5.googleusercontent.com/p/AF1QipM6NSMvIUDANBobjo3bBOvULWiARccC00x_XO3s=w408-h544-k-no",
//     details: "Mcc Farm.",
//   },
// };

// const LocationDetails = ({ image, details, adress }) => {
//   return (
//     <div
//       style={{
//         padding: "5px",
//         display: "flex",
//         // gap: "10px",
//         flexDirection: "column",
//       }}
//     >
//       <p>{details}</p>
//       <p
//         style={{
//           color: "#606060",
//           width: "250px",
//         }}
//       >
//         {adress}
//       </p>
//       <img src={image} alt="Location" width="300px" height="300px" />
//     </div>
//   );
// };

// function Map() {
//   const { isLoaded, loadError } = useJsApiLoader({
//     googleMapsApiKey: REACT_APP_GOOGLE_MAPS_KEY,
//     libraries: ["places"],
//   });

//   const [map, setMap] = useState(null);
//   const [directionsResponse, setDirectionsResponse] = useState(null);
//   const [distance, setDistance] = useState("");
//   const [duration, setDuration] = useState("");
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [destination, setDestination] = useState(null);
//   const [isTracking, setIsTracking] = useState(false);
//   const [selectedLocation, setSelectedLocation] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);
//   const originRef = useRef();
//   const destinationRef = useRef();
//   const [searchOpen, setSearchOpen] = useState(false);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const { latitude, longitude } = position.coords;
//         setCurrentLocation({ lat: latitude, lng: longitude });
//         if (originRef.current && !originRef.current.value) {
//           originRef.current.value = `${latitude}, ${longitude}`;
//         }
//       });
//     }
//   }, []);

//   if (loadError) return <div>Error loading Google Maps API</div>;
//   if (!isLoaded) return <p>Loading...</p>;

//   async function calculateRoute() {
//     if (!window.google || !originRef.current || !destinationRef.current) return;

//     const directionsService = new window.google.maps.DirectionsService();
//     const results = await directionsService.route({
//       origin: originRef.current.value,
//       destination: destinationRef.current.value,
//       travelMode: window.google.maps.TravelMode.DRIVING,
//     });
//     setDirectionsResponse(results);
//     setDistance(results.routes[0].legs[0].distance.text);
//     setDuration(results.routes[0].legs[0].duration.text);
//     setShowDetails(false);
//   }

//   function clearRoute() {
//     setDirectionsResponse(null);
//     setDistance("");
//     setDuration("");
//     if (originRef.current) originRef.current.value = "";
//     if (destinationRef.current) destinationRef.current.value = "";
//   }

//   function toggleTracking() {
//     setIsTracking(!isTracking);
//   }

//   function setDestinationCoordinates(coordinates, location) {
//     setDestination(coordinates);
//     setSelectedLocation(location);
//     if (destinationRef.current) {
//       destinationRef.current.value = `${coordinates.lat}, ${coordinates.lng}`;
//     }
//     setShowDetails(true);
//     setSearchOpen(false);
//   }

//   return (
//     <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
//       <div
//         className="header"
//         style={{
//           position: "absolute",
//           left: 0,
//           top: 0,
//           height: "100%",
//           width: "100%",
//         }}
//       >
//         <GoogleMap
//           center={currentLocation || center}
//           zoom={12}
//           mapContainerStyle={{
//             width: "100%",
//             height: "100%",
//           }}
//           options={{
//             zoomControl: false,
//             streetViewControl: false,
//             mapTypeControl: false,
//             fullscreenControl: false,
//           }}
//           onLoad={(map) => setMap(map)}
//         >
//           {currentLocation && <Marker position={currentLocation} />}
//           {destination && <Marker position={destination} />}
//           {directionsResponse && (
//             <DirectionsRenderer directions={directionsResponse} />
//           )}
//         </GoogleMap>
//       </div>
//       {/* Places */}
//       {searchOpen && (
//         <div
//           style={{
//             position: "absolute",
//             top: "10px",
//             left: "10px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "4px",
//           }}
//         >
//           {Object.entries(locations).map(([key, value]) => (
//             <button
//               key={key}
//               onClick={() => setDestinationCoordinates(value, key)}
//               style={{ backgroundColor: "blanchedalmond" }}
//             >
//               {key.charAt(0).toUpperCase() +
//                 key
//                   .slice(1)
//                   .replace(/([A-Z])/g, " $1")
//                   .trim()}
//             </button>
//           ))}
//         </div>
//       )}
//       {/* Search Bar */}
//       <button
//         style={{
//           position: "absolute",
//           top: "10px",
//           left: "10px",
//         }}
//         onClick={() => setSearchOpen(!searchOpen)}
//         aria-label={searchOpen ? "Close search" : "Open search"}
//       >
//         <FaTimes />
//       </button>
//       <div
//         style={{
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",

//           alignItems: "center",
//         }}
//       >
//         <div
//           className="searchcomponent"
//           style={{
//             padding: "16px",
//             borderRadius: "8px",
//             margin: "16px",
//             backgroundColor: "white",
//             boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//             width: "fit-content",
//             position: "absolute",
//           }}
//         >
//           <div
//             className="top"
//             style={{ display: "flex", justifyContent: "space-between" }}
//           >
//             <div className="mainorg">
//               <div className="orgimg">
//                 <img src={orgimg} alt="org" />
//               </div>
//               <div
//                 className="orgininp"
//                 style={{ flexGrow: 1, fontSize: "13px" }}
//               >
//                 <Autocomplete>
//                   <input
//                     type="text"
//                     placeholder="Origin"
//                     ref={originRef}
//                     defaultValue={
//                       currentLocation
//                         ? `${currentLocation.lat}, ${currentLocation.lng}`
//                         : ""
//                     }
//                     style={{
//                       padding: "5px",
//                       display: "flex",
//                       border: "1px solid lightgrey",
//                       borderRadius: "5px",
//                     }}
//                   />
//                 </Autocomplete>
//               </div>
//             </div>
//             <div className="maindest">
//               <div className="dest">
//                 <img src={dest} alt="org" />
//               </div>
//               <div style={{ flexGrow: 1, fontSize: "13px" }}>
//                 <Autocomplete>
//                   <input
//                     type="text"
//                     placeholder="Destination"
//                     ref={destinationRef}
//                     style={{
//                       padding: "5px",
//                       display: "flex",
//                       border: "1px solid lightgrey",
//                       borderRadius: "5px",
//                     }}
//                   />
//                 </Autocomplete>
//               </div>
//             </div>
//             <div className="btn">
//               <button onClick={calculateRoute}>
//                 <img src={direct} alt="pvt" />
//               </button>

//               <button onClick={clearRoute}>
//                 <img src={wrong} alt="pvt" />
//               </button>
//               <button onClick={toggleTracking}>
//                 {isTracking ? "Stop" : "Start"} Tracking
//               </button>
//             </div>
//           </div>
//           <div
//             className="timing"
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               marginTop: "8px",
//             }}
//           >
//             <p>Distance: {distance} </p>
//             <p>Duration: {duration} </p>
//             <button
//               onClick={() => {
//                 if (map && currentLocation) {
//                   map.panTo(currentLocation);
//                   map.setZoom(15);
//                 }
//               }}
//             >
//               <FaLocationArrow
//                 style={{
//                   width: "15px",
//                   height: "15px",
//                 }}
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//       {selectedLocation && showDetails && (
//         <div className="mainlocation">
//           <div className="locationdetails">
//             <LocationDetails
//               details={locations[selectedLocation].details}
//               image={locations[selectedLocation].image}
//               adress={locations[selectedLocation].adress}
//               name={locations[selectedLocation].image}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Map;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import LikeDislike from "./component/LikeDislike"; // Import LikeDislike component
import SubscriptionButton from "./component/SubcriptionButton"; // Import SubscriptionButton component

function VideoList({ videos }) {
  // State to track the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle the change in the search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter videos based on the search query
  //   const filteredVideos = videos.filter(
  //     (video) =>
  //       video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       video.description.toLowerCase().includes(searchQuery.toLowerCase()) // Optionally, you can include other properties like description
  //   );

  const filteredVideos =
    videos?.filter(
      (video) =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase())
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
